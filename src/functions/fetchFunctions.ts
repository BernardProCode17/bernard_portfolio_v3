export const fetchProjectQuery: string = '*[_type == \'projects\'] {\n' +
    '  title,\n' +
    '  short_des,\n' +
    '  \'long_des\': long_des[0].children[0].text,\n' +
    '  feature,\n' +
    '  \'challenges_solutions\':challenges_solutions[0].children[0].text,\n' +
    '  \'reflection\': reflection[0].children[0].text,\n' +
    '  \'project_image\': project_image.asset._ref,\n' +
    '  \'project_image_alt\': project_image.alt,\n' +
    '  project_links\n' +
    '}'



