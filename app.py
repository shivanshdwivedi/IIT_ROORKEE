import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)
Mental = pickle.load(open('Mental.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    '''
    For rendering results on HTML GUI
    '''
    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = Mental.predict(final_features)

    result = prediction[0]
    if (result==1):
        
        output = 'You Need Therapy'
    
    else :
    
         output = 'You Do Not Need Therapy'
    
    return render_template('index.html', prediction_text='The result is {}'.format(output))

@app.route('/predict_api',methods=['POST'])
def predict_api():
    '''
    For direct API calls trought request
    '''
    data = request.get_json(force=True)
    prediction = Mental.predict([np.array(list(data.values()))])

    result = prediction[0]
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)