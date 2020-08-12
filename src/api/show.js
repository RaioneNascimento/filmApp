import axios from 'axios';

export default axios.create({
  baseURL:"http://fd4ed40e9128.ngrok.io",
  headers: {
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhaW9uZWJvbmZpbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6InNlY3JldG8iLCJpYXQiOjE1OTY1NjcyMTQsImV4cCI6MTU5NjU4NTIxNH0.iq-JNhA9Lo1JlsS2595njU9Dp3JMnnugeI1_lyXTXf8"
  }
});