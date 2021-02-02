let data = [
    {
        "timestamp": "2021-02-02T06:10:18.518Z",
        "Greg": 4,
        "Jack": 4,
        "Leslie": 3,
        "Sarah": 3,
        "Steve": 2,
        "Yihan": 4
    },
    {
        "timestamp": "2021-02-02T06:11:02.472Z",
        "Greg": 5,
        "Jack": 4,
        "Leslie": 5,
        "Sarah": 5,
        "Steve": 3,
        "Yihan": 5
    },
    {
        "timestamp": "2021-02-02T06:12:37.563Z",
        "Greg": 5,
        "Jack": 5,
        "Leslie": 4,
        "Sarah": 3,
        "Steve": 5,
        "Yihan": 5
    },
    {
        "timestamp": "2021-02-02T06:17:51.350Z",
        "Greg": 4,
        "Jack": 5,
        "Leslie": 3,
        "Sarah": 3,
        "Steve": 5,
        "Yihan": 4
    },
    {
        "timestamp": "2021-02-02T06:47:21.475Z",
        "Greg": 3,
        "Jack": 5,
        "Leslie": 5,
        "Sarah": 4,
        "Steve": 5,
        "Yihan": 2
    },
    {
        "timestamp": "2021-02-02T15:32:47.819Z",
        "Greg": 4,
        "Jack": 5,
        "Leslie": 3,
        "Sarah": 1,
        "Steve": 2,
        "Yihan": 5
    }
]

// the function dates a data
// arrayn as an argument
function averageData(data){
  // new empty array to be filled
  // with data in new structure
  let newData = [];
  // assuming each data point has the same
  // keys/categories, we extract an array of them from the
  // first data point in the array
  // in class we changed it to the last element instead
  // as the first one did not have all the categories filled out
  // there is more thorough ways to do this, but for out purposes
  // now, this will be enough
  let keys = Object.keys(data[0]);
  // now we loop over the keys/categories
  for(let i = 0; i < keys.length; i++){
    // store the current key/category in
    // a variable:
    let key = keys[i];
    // now we will loop over each data point
    // in the data set, check if it has a value
    // for the key/category and add them to
    // a total sum variable
    // as well as count the occurences in order to
    // calulate the averae in the end
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      // check if the key exists
      // for this datapoint
      if(key in datum){
        // add to sum
        sum += datum[key];
        // increase count
        num++;
      }
    }
    // now calculate the average
    let avg = sum/num;
    // make sure the value is a number
    // (some value might be strings)
    if(!isNaN(avg)){
      // create an object with both the average
      // and also the number of measurements that
      // went into the average
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      // add the new datapoint to the new data array
      newData.push(newDataPoint);
    }
  }
  // return everything when it is done
  return newData;
}

let transformedData = averageData(data);
console.log(transformedData);

let container = document.getElementById("container");

for (let i = 0; i<transformedData.length; i++){
  let datapoint = transformedData[i];

  let friend = datapoint.name;
  let average = datapoint.average;

  let bar = document.createElement("div");
  bar.className = "bar";
  bar.style.width = (average*75) + "px";

  let barname = document.createElement("p");

  barname.innerHTML = friend;

  bar.appendChild(barname);

  container.appendChild(bar);
}
