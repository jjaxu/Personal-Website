def parse(input_file = 'puns_raw.txt', output_file = 'puns_parsed.txt', ignore = [], csv_separator = ';'):
    with open(output_file, 'w') as parsed:
        parsed.write("content" + csv_separator + "category\n")
        with open(input_file, 'r') as file:
            for line in file:
                try:
                    _id = int(line.split(".")[0])
                    if _id in ignore:
                        continue
                except:
                    print(line)
                content = line.partition('"')[-1].rpartition('"')[0]
                content.replace('"', '')
                category = line.partition('(')[-1].rpartition(')')[0]
                parsed.write('"' + str(content).strip() + '"' + csv_separator + str(category).split(" ")[0].strip() + "\n")
            file.close()
        parsed.close()

parse(ignore = [7,14,20,57,70,80,82,89,103,106,108,123,135,168,169,
                183,189,191,196,199,207,210,214,221,234,236,239,241,
                242,248,262,264,270,278,282,287,298,299,300,302,304,
                306,312,317,318,331,335,337,340,341,358,361,366,376])
