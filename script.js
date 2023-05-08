// Make an API request to fetch the latest 2 entries from the channel
fetch('https://api.thingspeak.com/channels/2129271/feeds.json?results=1')
  .then(response => response.json())
  .then(data => {
    // Get the latest entry from the feeds array
    // console.log(data);
    const latestEntry = data.feeds[0];

    // Update the value of Box 1 with the value of field1 from the latest entry
    document.getElementById('box1').innerHTML = latestEntry.field1;

    // Update the value of Box 2 with the value of field2 from the latest entry
    document.getElementById('box2').innerHTML = latestEntry.field2;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
