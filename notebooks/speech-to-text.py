import json
import os
import sys
from os.path import join, dirname
#ibm_watson is not a default python module, install with: pip3 install ibm_watson
from ibm_watson import SpeechToTextV1
from ibm_watson.websocket import RecognizeCallback, AudioSource
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator

#assumes local_file_path is the the path of the audio to transcribe
def speech_to_text(filename):
    #writing to new file, if one doesn't exist
    f = open("nature-and-zen.txt", 'a+')
    #Should probably remove API Key bc sensitive information
    authenticator = IAMAuthenticator('KuyElaYRmMz5Sb4okniJfkAdryuTnjh_QtV0SfC5lwhG')
    service = SpeechToTextV1(authenticator = authenticator)
    #Should probably remove API URL bc sensitive information
    service.set_service_url('https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/ac3e0c60-51d5-4b01-9acb-711c614ae767')
    with open(join(dirname('__file__'),filename),'rb') as audio_file:
        dic = json.loads(
                json.dumps(
                    service.recognize(
                        audio=audio_file,
                        content_type='audio/mp3',
                        model='en-US_NarrowbandModel',
                    continuous=True).get_result(), indent=2))
    # Stores the transcribed text
    str = ""
    while bool(dic.get('results')):
        str = dic.get('results').pop().get('alternatives').pop().get('transcript')+str[:]
    f.write(str+"\n\n")

#call function here
speech_to_text(sys.argv[1])
