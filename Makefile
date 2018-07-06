.PHONY: all clean

all:
	@python convert.py
	@./retab.sh

copy: all
	cat ./wikidark.js | xclip -selection c

clean:
	@rm -f wikidark.js
