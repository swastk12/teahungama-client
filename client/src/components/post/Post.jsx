import './post.css'
import {Link} from "react-router-dom" 

export default function get({post}) {
  const PF = "http://3.110.162.5/images/";
  return (
    <div className='post'>
      {post.photo && (
      <img className="postimage"
      src ={PF + post.photo}
      alt =""/>
      )}
      <div className='postinfo'>
          <div className='postcats'>
     {
       post.categories.map((c)=>(
        <span className='postcat'>{c.name}</span>
       ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className='posttitle'>
         {post.title}
        </span>
          </Link>
    
        <hr/>
    
        <span className='postdate'>{new Date(post.createdAt).toDateString()}
</span>
</div>
<p className='postDesc'>
   {post.desc}
</p>
    </div>
  )
}
