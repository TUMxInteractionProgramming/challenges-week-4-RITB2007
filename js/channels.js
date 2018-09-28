var yummy = {
    name:"#Yummy",
    createdOn:Date("2016-04-01"),
    createdBy:"minus.plus.yummy",
    starred:false,
    expiresIn:100,
    messageCount:999
}
var sevenContinents = {
    name:"#SevenContinents",
    createdOn:Date("2016-04-01"),
    createdBy:"cheeses.yard.applies",
    starred:true,
    expiresIn:100,
    messageCount:999
}
var killerApp = {
    name:"#KillerApp",
    createdOn:Date("2016-04-01"),
    createdBy:"minus.plus.yummy",
    starred:false,
    expiresIn:100,
    messageCount:999
}
var firstPersonOnMars = {
    name:"#FirstPersonOnMars",
    createdOn:Date("2016-04-01"),
    createdBy:"minus.plus.yummy",
    starred:true,
    expiresIn:100,
    messageCount:999
}
var octoberfest = {
    name:"#Octoberfest",
    createdOn:Date("2016-04-01"),
    createdBy:"minus.plus.yummy",
    starred:false,
    expiresIn:100,
    messageCount:999
}

// #8 write a function List Channel
function listChannels() {

$('#channels ul').append(preCreateChannelElement(yummy));
    $('#channels ul').append(preCreateChannelElement(sevenContinents));
    $('#channels ul').append(preCreateChannelElement(killerApp));
    $('#channels ul').append(preCreateChannelElement(firstPersonOnMars));
    $('#channels ul').append(preCreateChannelElement(octoberfest));
    switchChannel(sevenContinents);

}

// #8 write a function create channel element

function preCreateChannelElement(channelObject){

	var nameChannel = channelObject.name.substring(1,channelObject.name.length);
	var nameClean = nameChannel.charAt(0).toLowerCase()+nameChannel.substring(1,nameChannel.length);
	var star = (channelObject.starred) ? "fas" : "far";
	var messages = channelObject.messageCount;
	var expires = channelObject.expiresIn;

	var exitChannel = createChannelElement(nameClean,nameChannel,star,messages,expires);

	return exitChannel;
}

function createChannelElement(nameClean,nameChannel,star,messages,expires){

    var channelElement = '<li onclick="switchChannel('+ nameClean + ')">#' + 
                            nameChannel +
                            '<span class="channel-meta">' +
                                '<i id="'+ nameClean +'-star" class="' + star +' fa-star"></i>' +
	                            '<span>' + expires + ' min</span>' +
	                            '<span>' + messages + ' new</span>' +
	                        	'<i class="fas fa-chevron-right"></i>' +
                            '</span>' + 
                        '</li>';

	return channelElement;
}

