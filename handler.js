import random_name from 'node-random-name';

const hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `lambda function executed successfully with circle ci! ${random_name()}`,
    }),
  };

  callback(null, response);

};

export { hello };
