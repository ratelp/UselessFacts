require("dotenv").config();
const express = require("express");
const router = express.Router();

const RANDOM_FACTS_URL = process.env.RANDOM_FACTS_URL;
const TODAY_FACT_URL = process.env.TODAY_FACT_URL;

//ROTA PRINCIPAL
router.get("/", (req, res) => {
	res.render("menu");
});

//ROTA DO FATO RANDOMICO
router.get("/random", async (req, res) => {
	const message = req.query.message;
	let data = [];
	try {
		const fato = await fetch(RANDOM_FACTS_URL);
		data = await fato.json();
	} catch (err) {
		console.log("Erro ao acessar dados");
		res.render("random", {
			data,
			message: "Não foi possível acessar os dados",
		});
	}
	res.render("random", { data, message });
});

//ROTA DO FATO DO DIA
router.get("/today", async (req, res) => {
	const message = req.query.message;
	let data = [];
	try {
		const fato = await fetch(TODAY_FACT_URL);
		data = await fato.json();
	} catch (err) {
		console.log("Erro ao acessar dados");
		res.render("today", {
			data,
			message: "Não foi possível acessar os dados",
		});
	}
	res.render("today", { data, message });
});

module.exports = { router };
