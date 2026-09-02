PANDOC := /usr/bin/pandoc
PANDOC_IMAGINE := $(HOME)/bin/pandoc-imagine
HTTP_FILES = \
	tomasi-lezione-09.html \
	tomasi-lezione-08.html \
	tomasi-lezione-07.html \
	tomasi-lezione-06.html \
	tomasi-lezione-05.html \
	tomasi-lezione-04.html \
	tomasi-lezione-03.html \
	tomasi-lezione-02.html \
	tomasi-lezione-01.html \
	index.html

.phony: all http

all: $(HTTP_FILES)

index.html: index.md
	$(PANDOC) \
		--katex \
		--to html5+smart \
		--toc \
		--toc-depth 2 \
		--template ./template.html5 \
		--css css/index-theme.css \
		--css css/skylighting-solarized-theme.css \
                -V "lang=it-IT" \
		--wrap=none \
		-f markdown+tex_math_single_backslash+subscript+superscript \
		-o $@ \
		$<

tomasi-lezione-%.html: tomasi-lezione-%.md
	$(PANDOC) \
	    	--standalone \
		--filter $(PANDOC_IMAGINE) \
                --template ./template-revealjs.html5 \
		--katex \
                --css css/custom-revealjs.css \
		-f markdown+tex_math_single_backslash+subscript+superscript \
		-V "revealjs-url=reveal.js-5.2.1" \
                -V "width=1440" \
                -V "height=810" \
                -V "background-image=media/background.png" \
                -V "lang=it-IT" \
                -V "theme=white" \
                -V "progress=true" \
                -V "slideNumber=true" \
                -V "history=true" \
		-t revealjs \
		-o $@ $<

http: $(HTTP_FILES)
	python3 -m http.server
