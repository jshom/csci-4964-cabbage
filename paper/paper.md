# Motivation

Sam likes noise while he sleeps so he likes idea.

# AI Text Generation Approaches

We used Markov model and a LSTM approach for various auto generated noise.

## Training Data

We sourecd our traning data from ...

## Markov Model

The work and science behind this.

## LSTM Apprach

The work and science behind this as well.

# Use of Cognitive Technologies

We used IBM Watson technologeis that made it easy to convert text to speech and
vise versa. This allowed us to traing the models easier by importing podcast
audio into the model as plain text after watson tranformation process finished.

I'm baby air plant vexillologist brunch tacos tattooed meh ethical viral
polaroid pinterest 90's farm-to-table literally fashion axe bushwick. Yuccie
lo-fi subway tile, actually ugh occupy 8-bit selvage unicorn jianbing pabst
cronut hell of lomo meh. Authentic gochujang echo park iPhone four loko
portland flannel heirloom irony. Twee single-origin coffee subway tile bitters
synth disrupt adaptogen gochujang chicharrones air plant aesthetic hell of
beard shoreditch health goth. Raclette woke gastropub, locavore tumblr bespoke
tumeric.

Lo-fi aesthetic tumblr franzen. VHS whatever blog, chia hexagon tilde ramps
synth succulents readymade waistcoat poutine vinyl la croix echo park.
Aesthetic vegan echo park, blue bottle neutra succulents intelligentsia vinyl
godard thundercats af try-hard green juice flannel. Locavore hell of biodiesel,
tote bag bushwick fixie truffaut authentic venmo jianbing.

# Application

The application was integral to providinga a usbale interface to the audio.

Something sometihing. maybe write a bit about electron

I'm baby air plant vexillologist brunch tacos tattooed meh ethical viral
polaroid pinterest 90's farm-to-table literally fashion axe bushwick. Yuccie
lo-fi subway tile, actually ugh occupy 8-bit selvage unicorn jianbing pabst
cronut hell of lomo meh. Authentic gochujang echo park iPhone four loko
portland flannel heirloom irony. Twee single-origin coffee subway tile bitters
synth disrupt adaptogen gochujang chicharrones air plant aesthetic hell of
beard shoreditch health goth. Raclette woke gastropub, locavore tumblr bespoke
tumeric.

Lo-fi aesthetic tumblr franzen. VHS whatever blog, chia hexagon tilde ramps
synth succulents readymade waistcoat poutine vinyl la croix echo park.
Aesthetic vegan echo park, blue bottle neutra succulents intelligentsia vinyl
godard thundercats af try-hard green juice flannel. Locavore hell of biodiesel,
tote bag bushwick fixie truffaut authentic venmo jianbing.

I'm baby air plant vexillologist brunch tacos tattooed meh ethical viral
polaroid pinterest 90's farm-to-table literally fashion axe bushwick. Yuccie
lo-fi subway tile, actually ugh occupy 8-bit selvage unicorn jianbing pabst
cronut hell of lomo meh. Authentic gochujang echo park iPhone four loko
portland flannel heirloom irony. Twee single-origin coffee subway tile bitters
synth disrupt adaptogen gochujang chicharrones air plant aesthetic hell of
beard shoreditch health goth. Raclette woke gastropub, locavore tumblr bespoke
tumeric.

Lo-fi aesthetic tumblr franzen. VHS whatever blog, chia hexagon tilde ramps
synth succulents readymade waistcoat poutine vinyl la croix echo park.
Aesthetic vegan echo park, blue bottle neutra succulents intelligentsia vinyl
godard thundercats af try-hard green juice flannel. Locavore hell of biodiesel,
tote bag bushwick fixie truffaut authentic venmo jianbing.

![Image of the ElectronJS App](./images/app-screenshot.jpg)

## ElectronJS

To generate the application, we chose to build a native application that would
possible to download and run on a variety of machines. This would make it
possible for us to not have a constraint on a host machine's operating system
due to the way that ElectronJS is essentially an encapsulated web view. In
addition to the interoperability benefit, ElectronJS allowed our team to use
a widely used language that allowed us to quickly build an app in the limited time
frame.

# Problems not Solved

Given the limited time scope of the project, 3 weeks was not enough time to
collect and train the models on enough data to create perfect text. Through we
see he promise, the text often feels like it is missing grammatical marks that
could be detracting form the goal of creating fluid sounding speech to go to
sleep to.

Additionally, we did not parametrize or customize the type of speech output.
This lead to very robotic sounding speech that is more difficult to go to sleep
to. Though the speech had human-like vocal inflections, the robotic sound alike
to the grammatical issues detracted from the end goal.

These problems could potentially be solved by longer processing time and with
more training data. We did not have a strong machine learning fleet of machines
to train the models on, so we did the best we could with our personal machines.
This problem was further expanded since we were using the CPU version of
Tensorflow that does not support massive parallelism with the GPU version that
would vastly speed up training and generation times leading to higher quality
text, hence speech output.

Lastly, the system architecture used for deployment lacked the Model API that
would serve the model output on a separate server. To simplify the workload, we
generated the text generation from the three types of output and randomized the
start points to provide essentially a stub of the API. If we chose to deploy
this application, a more service based deployment approach would be necessary
to allow for independence of changes between the Electron application and the
two models.

# Future Work

Essentially, the future work would entail building on the issues of the current
implantation through creating a stronger infrastructure, changing Tensorflow
from CPU to GPU based along, providing more training data and training the
model for more epochs.

The are however a few interesting areas that we did not have a chance to
explore, one of which was implementing a custom loss function that would factor
in the English grammar. This would entail appending to the loss function
grammar issues like a breaking in the common Subject Verb Object form of
sentences, run on sentences and misuse of conjunctions. In theory, this would
skew the output to be more grammar focused than only trying to match the
following word from the previous subsequence of words.

In addition to improving the general correctness of the text generation,
we will want to work on experimenting with the types of voices and the
different variations of speech inflections or styles. This would fall into
the experimental and validation aspects of the project that we did not have
a chance to fully go through. This would be composed of running a standardized
trial with comparison of REM and NREM sleep between the various possibilities.
Since we are using white noise as a baseline, we would use that as the control
and compare the performance between standard pink noise generators, and our
various channels, lengths and voices of speech output.

This would allow us to show that our approach would create a statistically
significant change in sleep that would prompt people to experiment with out
technology.

\newpage

# References

1. something
2. somethign else
3. https://www.webmd.com/sleep-disorders/pink-noise-sleep
