from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def home():
    personagens = [
        {
            "nome": "Seya",
            "imagem_nome": "Seya_Repouso.png",
            "vida": 60,
            "poder": 38,
            "imagem_poder": "Meteoro_Pegasus.gif",
            "poder_nome": "Pégasus"
        },
        {
            "nome": "Shiryu",
            "imagem_nome": "Shiryu_Repouso.png",
            "vida": 61,
            "poder": 43,
            "imagem_poder": "Colera_Dragao.gif",
            "poder_nome": "Dragão"
        },
        {
            "nome": "Hyoga",
            "imagem_nome": "Hyoga_Repouso.png",
            "vida": 58,
            "poder": 36,
            "imagem_poder": "Po_Diamante.gif",
            "poder_nome": "Cisne"
        },
        {
            "nome": "Shun",
            "imagem_nome": "Shun_Repouso.png",
            "vida": 59,
            "poder": 35,
            "imagem_poder": "Corrente_Andromeda.gif",
            "poder_nome": "Andrômeda"
        },
        {
            "nome": "Ikki",
            "imagem_nome": "Ikki_Repouso.png",
            "vida": 64,
            "poder": 42,
            "imagem_poder": "Ave_Fenix.gif",
            "poder_nome": "Fênix"
        }
    ]

    caminho_imagem = "/static/img/"

    return render_template(
        "index.html",
        personagens=personagens,
        caminho_imagem=caminho_imagem
    )


if __name__ == "__main__":
    app.run(debug=True)