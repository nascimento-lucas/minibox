from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'message': 'Olá, mundo!'})

@app.route('/ola/<nome>')
def ola_nome(nome):
    return jsonify({'message': f'Olá, {nome}!'})

if __name__ == '__main__':
    app.run(debug=True)