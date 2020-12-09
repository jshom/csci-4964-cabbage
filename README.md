# CABbAGE - Final Project: Cognitive Computing RPI (CSCI 4964)

The ultimate motivation for this application came from a desire for better
sleep and, by extension, a better way to fall asleep. The first step was to
look at the different things people use to fall asleep. Two commonly used media
are audiobooks and podcasts. We noticed that though these are indeed very
helpful for falling asleep, they weren't specifically designed for it. This
niche that was missing is what CABbAGE was born from. We realized that there
was no reason to risk losing your place in a podcast if we could generate the
podcast audio on the fly. This method would allow the user to select the
"sound" of audio that they want to fall asleep to, without having to find an
actual podcast episode to fit it. This application allows a user to gain the
proven benefit of falling asleep to a white noise, without the downsides
associated with using podcasts or audiobooks that aren't designed for sleep.

## Paper/Write-Up

See paper: https://github.com/jshom/csci-4964-cabbage/blob/main/paper/cabbage-paper.pdf

## For dev

Using `make` to spin up for build system

### Render Paper

Use `make paper` command to render the paper, make sure you have [Pandoc](https://pandoc.org) installed.

### Start Desktop Application (ElectronJS)

Use `make app` command to spin up the electron app, you will first need to enter the `/app` directory and run `npm install` to fetch dependencies

### Start Notebooks (for Training and Text Generation)

Use `make notebook` command to spin up the ![Jupyer](https://jupyter.org/) notebook.

You will need to have `docker` and `docker-compose` installed.

See https://www.docker.com/ and https://docs.docker.com/compose/ for docs and installation.

To start up run `make`, this will spin up a Jupyter notebook. All files will be
saved to the `./notebooks` directory.

>Tensorflow, Keras and Numpy should is pre-installed. The IBM Watson library should aso be installed.
>    Install library using: `pip install --upgrade "ibm-watson>=4.7.1"`
>
>_NOTE: using the nightly tf jupyer notebook image, hoping it doesn't cause any issues_
