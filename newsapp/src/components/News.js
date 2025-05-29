import React, { useEffect,useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
const News = (props)=>{
   
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const[page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)


    const capitalizefirstletter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }
  

      const updatenews=async()=>{
        props.setProgress(10);
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=591d57fa4c454ac3b462243147262b43&page=${page}&pageSize=${props.pageSize}`;
       // this.setState({loading:true});
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(40);
        let parseddata= await data.json()
        props.setProgress(70);
        setArticles(parseddata.articles)
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        props.setProgress( 100);
      }

     useEffect(() => {
      updatenews();
     }, []);


     // async componentDidMount(){
      //  console.log("cdm");
      //  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=591d57fa4c454ac3b462243147262b43&page=1&pageSize=${props.pageSize}`;
      //  this.setState({loading:true});
      //  let data = await fetch(url);
      //  let parseddata= await data.json()
      //  console.log(parseddata);
      //  this.setState({articles:parseddata.articles,
      //    totalResults:parseddata.totalResults,
      //    loading:false
      //  })
       //   this.updatenews();
    // }
       const handlenextclick=async ()=>{
        //console.log("next");
      //    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/props.pageSize))){
       //    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=591d57fa4c454ac3b462243147262b43&page=${this.state.page+1}&pageSize=${props.pageSize}`;
        //   this.setState({loading:true});
      //     let data = await fetch(url);
      //     let parseddata= await data.json()
          
        //  this.setState({
          //      page:this.state.page+1,
            //    articles:parseddata.articles,
              //  loading:false
        //  })
        //  }
        setPage(page+1);
        updatenews();
      }
      const handlepreviousclick=async ()=>{
      //    console.log("previous");
       //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=591d57fa4c454ac3b462243147262b43&page=${this.state.page-1}&pageSize=${props.pageSize}`;
      //    this.setState({loading:true});
        //  let data = await fetch(url);
      //    let parseddata= await data.json()
        //  console.log(parseddata);
        //  this.setState({
          //  page:this.state.page-1,
          //  articles:parseddata.articles,
          //  loading:false
        //  })
        setPage(page-1);
        updatenews();
      }

      const fetchMoreData=async()=>{
          setPage(page+1)
          const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=591d57fa4c454ac3b462243147262b43&page=${page+1}&pageSize=${props.pageSize}`;
          setPage(page+1)
          let data = await fetch(url);
          let parseddata= await data.json()
          setArticles(articles.concat(parseddata.articles))
          setTotalResults(parseddata.totalResults)
          //this.setState({articles:this.state.articles.concat(parseddata.articles),
          //totalResults:parseddata.totalResults,
          //})
      }
      
    return (
      <>
        <h1 className="text-center" style={{margin: `30px`, marginTop:`90px`}}>today's top headlines on {capitalizefirstletter(props.category)} </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
         >

        <div className="container">

        <div className="row">  {/*!this.state.loading &&*/}
                {articles.map((element)=>{
          return  <div className="col-md-4" key={element.url}>
          <NewsItem title={element.title ? element.title.slice(0,45):""} 
          description={element.description ? element.description.slice(0,88):""} 
          imageurl={element.urlToImage} 
          newsurl={element.url}
          author={element.author} 
          date={element.publishedAt} source={element.source.name}/>
      </div>
        })}
       
        {/* <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlepreviousclick}>&larr; previous</button>
        <button disabled={this.state.page+1> Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>next &rarr;</button>
        </div>*/}
          </div>
        </div>
        </InfiniteScroll>
        </>
    )
  
}
News.defaultProps = {
  country: "in",
  pageSize:8,
  category:"general"
}
News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string  
}
export default News
