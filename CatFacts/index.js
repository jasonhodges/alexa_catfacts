'use strict';
var Alexa = require('alexa-sdk');
//OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var APP_ID = "amzn1.echo-sdk-ams.app.[amzn1.ask.skill.fee58d65-b024-4195-83dd-2bf41a732e5b]";

var SKILL_NAME = 'Cat Facts';

/**
 * Array containing cat facts.
 */
var CATFACTS = [
    "Cats are one of, if not the most, popular pet in the world.",
    "On average, cats live for around 12 to 15 years.",
    "The heaviest domestic cat on record is 46 pounds, 15.2 ounces.",
    "Cats and humans have been associated for nearly 10000 years.",
    "Cats have powerful night vision, allowing them to see at light levels six times lower than what a human needs in order to see.",
    "A group of cats is called a clowder, a male cat is called a tom, a female cat is called a molly or queen while young cats are called kittens.",
    "Cats conserve energy by sleeping for an average of 13 to 14 hours a day.",
    "There are over 500 million domestic cats in the world.",
    "Cats knead with their paws when they are happy.",
    "An adult cat has 30 adult teeth.",
    "Cats cannot taste anything sweet.",
    "Cats can run up to 30 miles an hour.",
    "Unlike humans, cats only sweat thorugh their paws. This is why you may see them leave moist paw prints in the summer time.",
    "A group of kittens is called a kindle.",
    "Cats have more than 100 different vocal sounds.",
    "Most cats are lactose intolerant and should not be given cow's milk.",
    "A cat can jump approximately seven times its height.",
    "Cats greet one another by touching their noses together.",
    "A female cat carries her kittens for about 58-65 days before they are born.",
    "Cats can get tapeworm from eating mice.",
    "Cats have five toes on each front paw, but only four toes on each back paw.",
    "Cats are fastidious creatures about their 'bathroom.'' If you have more than one cat, you should have one litter box for each.",
    "Cats mark you as their territory when they rub their faces and bodies against you, as they have scent glands in those areas.",
    "Cats were first brought to the Americas in colonial times to get rid of rodents.",
    "Each cat's nose print is unique, much like human fingerprints.",
    "Cats dream, just like people do.",
    "If your cat approaches you with a straight, almost vibrating tail, this means that she is extremely happy to see you.",
    "When your cat sticks his butt in your face, he is doing so as a gesture of friendship.",
    "Cat videos are so popular online that there is an annual film festival that features the best ones."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random cat fact from the cat facts list
        var factIndex = Math.floor(Math.random() * CATFACTS.length);
        var randomFact = CATFACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a cat fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
