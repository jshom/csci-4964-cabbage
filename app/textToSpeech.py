#API Key: RvjCX9UklZ_U67zgUclY9BAmkqStk9AwJVHPYoS8wrlk
#new key: YnFENvrJ5NbnmHBY9WkQGy-4Il6mUSnFaIdjJpYrrMpH
#URL: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/4897dd9a-1109-4044-9739-b5236c8378d6
#new url: https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/385ea028-c947-4a95-9957-627da131989c
import sys
from ibm_watson import TextToSpeechV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

text = sys.argv[1]

authenticator = IAMAuthenticator('YnFENvrJ5NbnmHBY9WkQGy-4Il6mUSnFaIdjJpYrrMpH')
text_to_speech = TextToSpeechV1(authenticator=authenticator)
text_to_speech.set_service_url('https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/385ea028-c947-4a95-9957-627da131989c')
with open('audio_file.flac','wb') as audio_file:
    audio_file.write(text_to_speech.synthesize(text, accept='audio/mp3').get_result().content)
#print("test js->python integration")
