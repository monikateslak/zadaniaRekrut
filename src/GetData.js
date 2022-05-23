
import jsonp from 'jsonp'

jsonp('https://geocode.search.hereapi.com/v1/geocode?q=5+Rue+Daunou%2C+75000+Paris%2C+France&apiKey=my-api-key', 
null, 
(err, data) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log(data);
  }
});

  