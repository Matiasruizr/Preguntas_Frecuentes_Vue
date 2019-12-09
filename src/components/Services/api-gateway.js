import axios from 'axios'

var jmAWS = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.sendgrid.com/',
  headers: 
    {
    //   'Authorization': 'Bearer _Jc7GOMAQu2pfF12MwsyZw.tVbGJPxyZHtpg5aksC0w2nR99dNMraj59A2X7yHUikY',
      'Authorization': 'Bearer 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',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    },
    body: {
        personalizations: [
          {
            to: [
              {
                email: 'jmmontes@uc.cl',
              },
            ],
            subject: 'Hello World from the SendGrid Node.js Library!',
          },
        ],
        from: {
          email: 'jmmontes@notorious.cl',
        },
        content: [
          {
            type: 'text/plain',
            value: 'Hello, Email!',
          },
        ],
     }
 
})

export default jmAWS