import axios from 'axios'

var jmAWS = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/api.sendgrid.com/',
  headers: 
    {
      'Authorization': 'Bearer ' + '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',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'https://preguntas-frecuentes.herokuapp.com',
      'Access-Control-Allow-Methods': 'POST',
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
          email: 'test@example.com',
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