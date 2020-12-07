.PHONY: notebook app paper

notebook:
	@docker-compose up

app:
	@cd ./app && npm start

paper:
	@pandoc ./paper/*.md \
		-t latex \
		-o ./paper/cabbage-paper.pdf
