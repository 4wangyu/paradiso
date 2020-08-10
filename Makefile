build:
	mkdir -p dist/web/build
	cp -R web/build/. dist/web/build
	xgo --targets=windows/amd64 .
	mv paradiso*.exe dist/paradiso.exe
	zip -r dist.zip dist

clean:
	rm -rf ./dist
	rm dist.zip
