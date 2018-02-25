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
    "Unlike humans, cats only sweat through their paws. This is why you may see them leave moist paw prints in the summer time.",
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
    "Cat videos are so popular online that there is an annual film festival that features the best ones.",
    "Cats ears are controlled by over 30 muscles.",
    "Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.",
    "Cats can hear sounds to a pitch as high as 64 kilohertz.",
    "Beginning at two weeks of age, cats should have regular interaction with people to enable them to be social towards humans. After 16 weeks of age, it is difficult to tame a cat.",
    "More cats are left-pawed than right.",
    "Cats are now the most popular pet in the UK.",
    "Cats have been domesticated for around 4,000 years.",
    "For a home with more than one cat, it is best to have cats of the opposite sex.",
    "Cats have 24 more bones than humans do.",
    "A female cats pregnancy typically last about 9 weeks.",
    "At just one week old, a cat can start having dreams.",
    "Each side of a cat's face has about 12 whiskers.",
    "When Abraham Lincoln was US President, he had four pet cats which lived with him in the White House.",
    "The risk of heart attack is cut by a third among people who have a pet cat.",
    "In Japan, a black cat is considered a good luck charm.",
    "The world record of producing the most of kittens is held by a cat called Dusty, who gave birth to 420 kittens during her breeding life.",
    "The practice of declawing cats is banned in at least 22 countries, including Germany, Finland, Switzerland, Australia, New Zealand and Japan.",
    "Cats use their whiskers to figure out how wide an opening is and whether they will fit through it.",
    "The richest cat in the world is worth $13 million. The cat's owner, who passed away, left her fortune to him.",
    "The brain of a cat is 90% similar to that of a human.",
    "A cat keeps its head level when chasing its prey, while a dog bends its head up and down.",
    "Cats can't chew large chunks of food as they can't move their jaws sideways.",
    "The love of cats is called ailurophilia.",
    "In 1871, the first ever cat show was organized in London.",
    "A cat does not have a collarbone, which is why they can fit through small openings.",
    "Cats have the ability to sense earthquake tremors 10 or 15 minutes before humans can.",
    "A cat’s body is covered with roughly 130,000 hairs for each square inch.",
    "Female cats have the ability to get pregnant when they are only 4 months old.",
    "Cats have nearly twice the amount of neurons in their cerebral cortex as dogs.",
    "Cats walk like camels and giraffes: They move both of their right feet first, then move both of their left feet. No other animals walk this way.",
    "It's believed that catnip produces an effect similar to LSD or marijuana in cats. The effects of nepetalactone -- the chemical in catnip that can makes cats crazy -- wears off within 15 minutes, and won't surface again for a few hours, even if your cat remains in sniffing distance.",
    "A cat with a question-mark-shaped tail is asking, 'Want to play?'.",
    "When dogs wag their tails, they may be expressing happiness. But this isn't the case for cats! When your cat wags her tail, it's her way of warning you that you are getting on her last nerve.",
    "A cat's learning style is about the same as a 2- to 3-year-old child.",
    "Kittens in the same litter can have more than one father. This is because the female cat releases multiple eggs over the course of a few days when she is in heat.",
    "A cat's purr vibrates at a frequency of 25 to 150 hertz, which is the same frequency at which muscles and bones repair themselves."
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
