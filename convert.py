#!/usr/bin/env python

"""

Author: Gertjan van den Burg

"""

INPUT_FILE = "./wikidark.css"
OUTPUT_FILE = "./wikidark.js"
HEAD_FILE = "./head.js"
TAIL_FILE = "./tail.js"
CODE_CSS = "./mediawiki_tomorrow.css"


def main():
    with open(INPUT_FILE, "r") as fid:
        lines = [l.strip() for l in fid.readlines()]

    with open(CODE_CSS, 'r') as fid:
        lines.extend([l.strip() for l in fid.readlines()])

    escaped = []
    for line in lines:
        escaped.append(line.replace("'", "\\'").replace('"', '\\"'))

    wrapped = []
    for line in escaped[:-1]:
        wrapped.append('\t"    %s",' % line)
    wrapped.append('\t"    %s"' % escaped[-1])

    js = []
    with open(HEAD_FILE, "r") as fid:
        js.extend([l.strip() for l in fid.readlines()])
    js.extend(wrapped)
    with open(TAIL_FILE, "r") as fid:
        js.extend([l.strip() for l in fid.readlines()])

    with open(OUTPUT_FILE, "w") as fid:
        fid.write("\n".join(js))


if __name__ == "__main__":
    main()
