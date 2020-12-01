#API Key: RvjCX9UklZ_U67zgUclY9BAmkqStk9AwJVHPYoS8wrlk
#URL: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/4897dd9a-1109-4044-9739-b5236c8378d6

from ibm_watson import TextToSpeechV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator


def generateAudio(text):
    authenticator = IAMAuthenticator('RvjCX9UklZ_U67zgUclY9BAmkqStk9AwJVHPYoS8wrlk')
    text_to_speech = TextToSpeechV1(authenticator=authenticator)
    text_to_speech.set_service_url('https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/4897dd9a-1109-4044-9739-b5236c8378d6')
    with open('text_audio.flac','wb') as audio_file:
        audio_file.write(text_to_speech.synthesize(text, accept='audio/mp3').get_result().content)