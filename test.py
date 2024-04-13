import os
from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/upload', methods=['POST'])
@cross_origin()
def upload():
    # if 'image' not in request.files:
    #     return 'No image file found', 400

    # image = request.files['image']

    # # Save the image to a temporary file
    # image_path = os.path.join('/', image.filename)
    # image.save(image_path)
    # # Generate the SVG file path
    svg_path = os.path.join('./', 'graph.svg')

    # Send the SVG file
    response = send_file(svg_path, mimetype='image/svg+xml')

    return response

if __name__ == '__main__':
    app.run(port=9000)