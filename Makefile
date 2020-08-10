build:
	mkdir -p dist/web/build
	cp -R web/build/. dist/web/build
	GOOS=windows go build -o dist/paradiso.exe
	zip -r dist.zip dist

clean:
	rm -rf ./dist
