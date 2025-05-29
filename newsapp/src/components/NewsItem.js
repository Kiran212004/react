import React from 'react'
const NewsItem=(props)=>{

       let  {title,description,imageurl,newsurl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={
            {display:'flex',justifyContent: 'flex-end',position:'absolute',right:'0 '}
          }>
          <span className="badge rounded-pill bg-danger">{source} </span>
          </div>
        <img src={!imageurl?"https://images.theconversation.com/files/626383/original/file-20241017-17-cxy0ba.jpg?ixlib=rb-4.1.0&rect=29%2C0%2C4962%2C2477&q=45&auto=format&w=1356&h=668&fit=crop":imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"   href={newsurl} target="_blank" className="btn btn-sm btn-dark">read more</a>
        </div>
        </div>
      </div>
    ) 
  
}

export default NewsItem
