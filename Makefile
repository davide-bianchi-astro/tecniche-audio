CONDA ?= conda
CONDA_ENV ?= env_old_mac_workaround
PANDOC := $(CONDA) run -n $(CONDA_ENV) pandoc
HTTP_FILES = \
	fisica_applicata_parte-07.html \
	fisica_applicata_parte-06.html \
	fisica_applicata_parte-05.html \
	fisica_applicata_parte-04.html \
	fisica_applicata_parte-03.html \
	fisica_applicata_parte-02.html \
	fisica_applicata_parte-01.html \
	index.html

.PHONY: all http

all: $(HTTP_FILES)

index.html: index.md template.html5 css/index-theme.css css/skylighting-solarized-theme.css
	$(PANDOC) \
		--math-method=katex \
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

fisica_applicata_parte-%.html: fisica_applicata_parte-%.md template-revealjs.html5 css/custom-revealjs.css
	$(PANDOC) \
	    	--standalone \
                --template ./template-revealjs.html5 \
		--math-method=katex \
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
