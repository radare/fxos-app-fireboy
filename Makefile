all:
	rm -f fireboy.zip
	mv node_modules .node_modules
	zip -r fireboy.zip *
	mv .node_modules node_modules

install:
	mkdir -p node_modules
	npm install connect

