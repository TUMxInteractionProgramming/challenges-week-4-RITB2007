/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */

// Create geographic longitude and latitude
var currentLocation = {
    latitude: 51.484441, 
    longitude: 4.454181,
    what3words: "///lakwerk.peetoom.getoond"
};
console.log(currentLocation);

function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    // Store current selected channel in global variable currentChannel
    currentChannel = channelName;
    console.log("Current Channel", currentChannel);

    //Write the new channel to the right app bar
    document.getElementById('channel-name').innerHTML = channelName.name;

    //#6 change the #channel #location
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';
    
    /* #7 change the star according to the channel selected, using Font Awesome and a condition using object property info */
    imageName = (channelName.starred == true) ? "fas fa-star" : "far fa-star";
    $('#channel-star').attr('class', imageName);
 
    /* #6 #highlight the selected #channel.
    This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');
}

/* #7 function to toggle font awesome in chat-bar */
function star() {
    $('#channel-star').toggleClass('far fa-star fas fa-star');
    /* #7 change the starred attribute value */
    currentChannel.starred = !currentChannel.starred;
    /* #7 update star in the channel list area */
    toggleStar(currentChannel)
}

/* #7 a function to toggle star in the channel area depending on the current status of the starred attribute */
function toggleStar(channel) {
    iconCurrent = (channel.starred == false) ? "fas fa-star" : "far fa-star";
    iconNew = (channel.starred == true) ? "fas fa-star" : "far fa-star";
    $('#channels li:contains(' + channel.name + ') i:first').attr('class', iconNew);
}


/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

// #8 write a contructor function
function Message(text) {
    this.createdBy = currentLocation.what3words;
    this.latitude = currentLocation.latitude;
    this.longitude = currentLocation.longitude;
    this.createdOn = Date.now;
    this.expiresOn = new Date().setTime(Date.now() + (15 * 60 * 1000));
    this.text = text;
    this.own = true;
}

// #8 create send message function
function sendMessage() {
    var message = new Message($('#message-input').val());
    console.log(message);
    //var message = new Message('Hello Chatter');
   // $('#messages').append(createMessageElement(message));
   $('#message-input').append(createMessageElement(message));
  //        document.getElementById('#message-input').value();
  $('#message-input').val('');
    
}

    // #8 function to always display new message on the screen by scrolling content up
function updateScroll(){
    var messages = document.getElementById('message-input');
    messages.scrollTop = messages.scrollHeight;
}


// #8 creating message element function
function createMessageElement(messageObject) {
    date = new Date(Message.createdOn);
    var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var expiresIn = Math.round((((messageObject.expiresOn - Date.now()) % 86400000) % 3600000) / 60000);
    
    newMessageContent = '<div class="message'+
    (messageObject.own ? ' own' : '') + '">' +  
    '<h3><a href="https://map.what3words.com/' + messageObject.createdBy +'" target="_blank"><strong>' + messageObject.createdBy + '</strong></a>'
        + date.toLocaleString('nl-NL', options) + '<em>' + expiresIn + 'min. left</em></h3>' +
        '<p>' + messageObject.text + '</p> <button>+5 min.</button> </div>'
}



/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
