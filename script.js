// Make an API request to fetch the latest 2 entries from the channel
fetch('https://api.thingspeak.com/channels/2129271/feeds.json?results=1')
  .then(response => response.json())
  .then(data => {
    // Get the latest entry from the feeds array
    console.log(data);
    const latestEntry = data.feeds[0];
    // let total = latestEntry.field1;


    // Update the value of Box 1 with the value of field1 from the latest entry
    document.getElementById('box1').innerHTML = latestEntry.field1;

    // Update the value of Box 2 with the value of field2 from the latest entry
    document.getElementById('box2').innerHTML = latestEntry.field2;

    let space = latestEntry.field2;
    if (space == 0) {
      document.getElementById('box2').innerHTML = `<p>No Space Available</p>`;

    }
    if (space >= 5) {
      document.getElementById('box2').innerHTML = `<p>No Cars in Parking Area</p>`;

    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
