import os

base_docs_url = "./_notes/"

for root, dirs, files in os.walk(base_docs_url):
    for name in files:
        abs_link_url = os.path.join(root, name)
        if abs_link_url.endswith('.md'):
            with open(abs_link_url, 'r+', encoding='utf_8') as fi:
                content = fi.readlines()
                fi.seek(0)
                for line in content:
                    if line.rstrip().startswith("# ") or line.rstrip().startswith("UID: "):
                        continue
                    fi.write(line)
                fi.truncate()


