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
                content = content.replace('"', '')
                category = line.partition('(')[-1].rpartition(')')[0]
                parsed.write('"' + content.strip() + '"' + csv_separator + str(category).split(" ")[0].strip() + "\n")
            file.close()
        parsed.close()

parse(ignore = [7, 14, 15, 20, 23, 28, 31, 33, 36, 37, 43, 44, 48, 49, 54, 55, 57, 60, 63, 70, 73, 74, 76, 77, 78, 
                79, 80, 82, 83, 89, 92, 99, 102, 103, 104, 106, 107, 108, 109, 112, 113, 122, 123, 125, 129, 132, 134,
                 135, 136, 139, 140, 141, 145, 147, 154, 156, 160, 162, 164, 167, 168, 169, 172, 174, 175, 177, 179, 183, 
                 185, 186, 189, 190, 191, 196, 197, 198, 199, 200, 205, 207, 208, 210, 211, 214, 216, 218, 221, 223, 225, 
                 234, 236, 237, 239, 241, 242, 243, 244, 248, 254, 259, 262, 264, 266, 269, 270, 271, 278, 282, 287, 288, 
                 291, 292, 293, 296, 298, 299, 300, 302, 303, 304, 306, 308, 310, 311, 312, 313, 315, 317, 318, 320, 322, 
                 323, 324, 325, 328, 330, 331, 332, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 347, 348, 349, 352, 
                 354, 358, 359, 361, 364, 366, 371, 376])