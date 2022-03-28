import Post from "./Post"

const posts = [
  {
    id: '123',
    username: 'minami_hamabe.official',
    userImg: 'http://personal.rhul.ac.uk/zkac/332/Screenshot%202022-03-28%20at%2018.21.59.png',
    img: 'http://personal.rhul.ac.uk/zkac/332/IMG_1993.JPG',
    caption: 'This is dope!'
  },
  {
    id: '123',
    username: 'minami_hamabe.official',
    userImg: 'http://personal.rhul.ac.uk/zkac/332/Screenshot%202022-03-28%20at%2018.21.59.png',
    img: 'http://personal.rhul.ac.uk/zkac/332/Screenshot%202022-03-28%20at%2018.38.06.png',
    caption: 'This is dope!'
  },

]

function Posts() {
  return (
    <div>
      {posts.map(post => (
        <Post key={post.id}
          id={post.id} username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption} />
      ))}
    </div>
  )
}

export default Posts