/*
See README on instructions to create a new workspace, data base and Personal Access Token.

Then paste them below.`
 */
// ClassDirectoryWorkspace: ClassDirectory
const airTableBaseURL =
  'https://airtable.com/app1iHuo66LG7u6ph/tblvv6DdLRlTdPSRa/viwyrS9HpkpEq5tFI';
const token =
  'patj21ucPmKJFydxq.8b07e8fea9b4b13a5ac2816bedb3deaac7faad15da0dcc9a1e1d1dc5dc8776e7';

const parts = airTableBaseURL.split('/');
const baseId = parts[3];
// this is the "Untitled Table"
const tableId = parts[4];
console.log('Base ID:', baseId);
console.log('Table ID:', tableId);

const fetchTable = async (baseId, tableId, token) => {
  console.log('fetchTable');
  let response;
  try {
    response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(JSON.stringify(data.records, null, 2));
    return data;
  } catch (error) {
    console.error('Error fetching table:', error);
  }
};
const createStudentsTable = async (baseId, token) => {
  /*
  curl -X POST "https://api.airtable.com/v0/meta/bases/{baseId}/tables" \
-H "Authorization: Bearer YOUR_TOKEN" \
-H "Content-Type: application/json" \
--data '{
    "description": "A to-do list of places to visit",
    "fields": [
    ],
    "name": "Apartments"
  }'
  */
  const tableName = 'Students';
  const tableDescription = 'Table of Students';
  const fields = [
    {
      description: 'Name of student',
      name: 'name',
      type: 'singleLineText',
      // unique: true,
    },
    {
      description: 'CSS class for material card Color',
      name: 'color',
      type: 'singleLineText',
    },
    {
      description: 'Role of student',
      name: 'role',
      type: 'singleLineText',
    },
    {
      description: 'Image of student',
      name: 'image',
      type: 'url',
    },
    {
      description: 'Description of student',
      name: 'description',
      type: 'multilineText',
    },
    {
      name: 'Facebook',
      name: 'facebook',
      type: 'url',
    },
    {
      description: 'Twitter',
      name: 'twitter',
      type: 'url',
    },
    {
      description: 'LinkedIn',
      name: 'linkedin',
      type: 'url',
    },
    {
      description: 'Email',
      name: 'email',
      type: 'email',
    },
    {
      description: 'Github or Portfolio',
      name: 'briefcase',
      type: 'url',
    },
  ];

  const body = {
    description: tableDescription,
    fields: fields,
    name: tableName,
  };
  console.log('body:\n', body);

  let response;
  try {
    response = await fetch(
      `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    ).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }

  console.log(response);
  return response;
};

const getTableMetadata = async (baseId, token) => {
  let response = null;

  try {
    response = await fetch(
      `https://api.airtable.com/v0/meta/bases/${baseId}/tables`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const metadata = await response.json();
    console.log(JSON.stringify(metadata, null, 2)); // Pretty print the JSON response (metadata);
    return metadata;
  } catch (error) {
    console.error('Error fetching table:', error);
  }
};

const getStudentTableId = (metadata) => {
  const table = metadata.tables.find((table) => table.name === 'Students');
  return table.id;
};

const getStudentId = async (baseId, tableId, token, name) => {
  //
  const formula = `Name = '${name}'`;
  const encodedFormula = encodeURIComponent(formula);
  const url = `https://api.airtable.com/v0/${baseId}/${tableId}?filterByFormula=${encodedFormula}`;
  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
  let response;
  try {
    response = await fetch(url, { headers });
    const data = await response.json();
    if (data && Array.isArray(data.records) && data.records.length) {
      return data.records[0].id;
    }
  } catch (error) {
    console.log(error);
  }
};
const insertStudent = async (baseId, tableId, token, record) => {
  let response;
  try {
    response = await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record),
    });
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error(error);
  }
};

const updateStudent = async (baseId, tableId, rowId, token, record) => {
  let response;
  try {
    response = await fetch(
      `https://api.airtable.com/v0/${baseId}/${tableId}/${rowId}`,
      {
        method: 'PATCH',

        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields: record }),
      }
    );
    const data = await response.json();
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error(error);
  }
};

const testRecord = {
  fields: {
    color: 'blue',
    name: 'John Doe',
    role: 'Student',
    image: 'https://example.com/image.jpg',
    description: 'This is a sample description.',
    facebook: 'https://facebook.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    linkedin: 'https://linkedin.com/in/johndoe',
    email: 'johndoe@example.com',
    briefcase: 'https://github.com/johndoe',
  },
};

const getStudentData = () => {
  const students = [
    {
      color: 'Red',
      name: 'Abishek Lakandri',
      role: 'Cybersecurity Specialist',
      image:
        'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/Abishek.jpg?v=1691513787019',
      description: `I am Abishek Lakandri, hailing from Nepal. My journey brought me
                  to the US in 2018, driven by a thirst for knowledge. Joining the
                  Navy for expanded educational opportunities, I'm carving my
                  path. Currently pursuing a Computer Science degree at California
                  Institute of Arts and Technology, my focus lies in
                  Cybersecurity. Alongside my academic journey, I've attained ITF,
                  A+ Core 1, and Google Cybersecurity certifications. These
                  milestones mark my dedication to understanding technology and
                  safeguarding digital spaces. Curiosity has been my guiding star
                  since childhood, fueling my constant exploration of various
                  technological domains. From Nepal to the US, from the Navy to
                  academia, I'm on a relentless pursuit to grasp the intricacies
                  of technology and contribute to a secure digital world.`,
      facebook: 'https://www.facebook.com/lakandri.abhi',
      twitter: 'https://twitter.com/abhi1954',
      linkedin: 'https://www.linkedin.com/in/abishek-lakandri-a5776b153/',
      email: 'mailto:abishek.lakandri69@gmail.com',
      briefcase: 'https://boiling-solstice-century.glitch.me/',
    },
    {
      color: 'Pink',
      name: 'Aman Minapara',
      role: 'IT Sales Specialist',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00937.jpg?v=1691530346423',
      description:
        'I am an aspiring Technical Sales Specialist along with being an aspiring software engineer. Working with people and leading teams has always been something that has been a part of me although it did take some time for me to realize this and actually implement this into my life. I come from your typical big Indian family background, although I also grew up with people from such diverse backgrounds and cultures.It wasn’t always like. In my family, I was always the quiet kid who loved to learn anything and everything from tech to aviation, or even just watching tons of videos on how to put a screen protector on without any bubbles of course. The change from quiet and held back happened when I got my first job as a Hotel Manager and had to work with people everyday, from there everything shifted. Fast forward to today, the tech sales industry has been a fascinating new discovery for me because it connects two things that mean a lot to me, working with people and gaining knowledge in the tech industry.',
      facebook: 'https://www.facebook.com/lakandri.abhi',
      twitter: 'https://twitter.com/abhi1954',
      linkedin: 'https://www.linkedin.com/in/abishek-lakandri-a5776b153/',
      email: 'mailto:abishek.lakandri69@gmail.com',
      briefcase: 'https://boiling-solstice-century.glitch.me/',
    },
    {
      name: 'Anna He',
      role: 'Data Analyst',
      image:
        'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00608.jpg?v=1691514052211',
      description:
        "Hi, I'm Anna! I am a Bay Area native passionate about data, IT, and bridging the gap between technology and people. I am a recent graduate of UCSC (go slugs!) and look forward to entering the workforce. I am currently seeking roles related to software engineering, data analysis, IT, and design. Please feel free to reach me at my contacts, I would love to connect!",
      facebook: 'https://www.facebook.com/anna.he.9465/',
      twitter: 'https://twitter.com/annahe6',
      linkedin: 'https://www.linkedin.com/in/annahedev/',
      email: 'mailto:annahesf@gmail.com',
      briefcase: 'https://anna-about-me.glitch.me/',
      color: 'Purple',
    },
    {
      name: 'Ashley Sese',
      role: 'Full Stack Software Developer',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00657.jpg?v=1691514041722',
      description:
        'A dedicated mom to a joyful 2-year-old, a recent graduate of UC Berkeley Coding Bootcamp (March 2023), and an aspiring Software Developer. Trying to find a balance of parenthood and programming.',
      facebook: 'https://www.facebook.com/ashleyrean.sese',
      twitter: 'https://twitter.com/wtfashleetah',
      linkedin: 'https://www.linkedin.com/in/ashleyrean/',
      email: 'mailto:sese.ashrean@gmail.com',
      briefcase: 'https://ashrean.github.io/hw2-ProfessionalPortfolio/',
      color: 'Deep-Purple',
    },
    {
      name: 'Benedicto Navarro',
      role: 'Data Analyst',
      image:
        'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00529.jpg?v=1691514066267',
      description:
        "Aspiring Data Analyst You can tell how good a taqueria is by their burrito! Besides always being hungry, I'm a minimlist at heart so I find peace and joy by keeping my life simple.",
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/benedictonavarro',
      email: 'mailto:benedictonavarro93@gmail.com',
      briefcase: 'https://about-me-ben93.glitch.me/',
      color: 'Indigo',
    },
    {
      name: 'Elhadi Adam',
      role: 'IT',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00332.jpg?v=1691514028528',
      description:
        'Hi, Im Elhadi. I was born and raised in Omdurman, Sudan. I came to the US in December 2018 at the age of 22. I’m proud to be a part of SUMMER COHORT 2023 at Goodwill, Such an amazing class with wonderful instructors! Thank you for this great learning experience.',
      facebook: 'https://www.facebook.com/profile.php?id=100003920823921',
      twitter: 'https://twitter.com/AlhadiAdam7',
      linkedin: 'http://www.linkedin.com/in/elhadi-adam/',
      email: 'mailto:elhadiadam53@gmail.com',
      briefcase: 'https://oceanic-colossal-wire.glitch.me/',
      color: 'Blue',
    },
    {
      name: 'Elias Ramirez',
      role: 'IT / Software Developer',
      image:
        'https://cdn.glitch.me/b3ff15bf-b6fd-42b1-9468-aaeb79ddda9e/DSC00693.jpg?v=1691449262761',
      description: 'Aspiring IT professional',
      facebook: '',
      twitter: 'https://twitter.com/scifinology',
      linkedin: 'https://www.linkedin.com/in/eliasramirezcarrillo/',
      email: 'mailto:eliasramirezcarrillo@gmail.com',
      briefcase: 'https://eliasramirezcarrillo.com/portfolio',
      color: 'Cyan',
    },
    {
      name: 'Faizan Shaikh',
      role: 'IT Professional | Project Manager',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00395.jpg?v=1691514061753',
      description:
        'In Karachi, Pakistan, I was born and raised, cherishing the culture and warmth of their homeland. In 2004, I migrated to San Francisco, California, embracing adventure. Living in five different neighborhoods, I explored the city on a motorcycle and played sports passionately. I became a devoted fan of the local sports teams like warriors, giants, and 49ers.Initially working in construction, life took a turn when I got hit by a car. Determined to follow my passion for technology, I pursued a career in the field, building upon past IT experience. Through challenges and triumphs, I emerged resilient and hopeful, holding dear the memories of their journey and looking ahead to a bright future in the city my home.',
      facebook: 'https://www.facebook.com/aladdin.maru.5',
      twitter: 'https://twitter.com/sfaizan1202',
      linkedin: 'https://www.linkedin.com/in/fshaikh2/',
      email: 'mailto:faizanshaikh02@yahoo.com',
      briefcase: 'https://plume-sprinkle-satellite.glitch.me/',
      color: 'Teal',
    },
    {
      name: 'Jennifer Torres Orellana',
      role: 'Aspiring IT Professional',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00441.jpg?v=1691514080594',
      description:
        "I am a motivated and enthusiastic aspiring software developer with a strong passion for coding and problem-solving. Currently pursuing a degree in Web Development , I am eager to leverage my technical skills and knowledge to contribute to the development of innovative software solutions. I have a solid foundation in programming fundamentals and have gained practical experience through my internship at Bank of the West and 12- week Boot camp with the help of YearUp Bay Area and Goodwill/Dev/Mission. Proficient in languages such as HTML,CSS, Python, and JavaScript. When you don't find me next to a computer trying to learning new languages you can find me hiking with my 3 dogs Milo,Chunky and Smokey or cruising down California finding new adventures.",
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/jenniferto94',
      email: 'mailto:jennifertorresorellana@gmail.com',
      briefcase: '',
      color: 'Green',
    },
    {
      name: 'Natnael Metaferia',
      role: 'IT',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00343.jpg?v=1691514069414',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi explicabo magni deleniti repudiandae, fugit sequi veniam laborum illum quos animi distinctio molestias ipsam et quod, repellendus ratione. Est, non aspernatur.',
      facebook: 'https://www.facebook.com/lakandri.abhi',
      twitter: 'https://twitter.com/abhi1954',
      linkedin: 'https://www.linkedin.com/in/abishek-lakandri-a5776b153/',
      email: 'mailto:abishek.lakandri69@gmail.com',
      briefcase: 'https://boiling-solstice-century.glitch.me/',
      color: 'Lime',
    },
    {
      name: 'Nikolajs Adams',
      role: 'Aspiring IT Professional',
      image:
        'https://cdn.glitch.me/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00044.jpg?v=1691514082558',
      description:
        'Greetings, I am Nikolajs Adams, a highly motivated individual with a strong desire to excel in the IT industry. Witnessing the remarkable progress of autonomous vehicle technology ignited my passion for all things related to technology and IT. I make it a daily habit to actively seek out and acquire new knowledge in this field, and I am eager to begin my journey towards a fulfilling career in this exciting industry.',
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/nikolajsadams925/',
      email: 'mailto:adamsnikolajs@gmail.com',
      briefcase: 'https://brash-ripe-feet.glitch.me',
      color: 'Yellow',
    },
    {
      name: 'Paolo Gaudiel',
      role: 'Full Stack Software Developer',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/DSC00757.jpg?v=1691527426602',
      description:
        "Hi, I'm Paolo Gaudiel and I'm an aspiring Software Developer! I went to University of California, Los Angeles for my undergraduate degree in Psychobiology. After going through the biotech and pharmaceutical industry being initially interested in medicine, I realized I wanted to be in a completely different field and am now focused on breaking into tech.",
      facebook: '',
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/paologaudiel/',
      email: 'mailto:paologaudiel@gmail.com',
      briefcase: 'https://lighthearted-puffpuff-984500.netlify.app/',
      color: 'Amber',
    },
    {
      name: 'Kevin (Wen Hao) Li',
      role: 'Software Developer',
      image:
        'https://cdn.glitch.global/9cb3287b-5b67-4fc6-8093-f6682f2ba065/kevin.jpg?v=1691528061151',
      description:
        "I am a software engineer who wants to be apart of the future in the tech world. I am currently an upcoming senior at San Francisco State University studying Computer Science. My passions are exploring the city, playing video games with my friends, and doing new things such as going rafting, karting, and sky-diving. Don't be afraid to reach out, let's connect!",
      facebook: '',
      twitter: 'https://twitter.com/carerit2002',
      linkedin: 'https://www.linkedin.com/in/wen-hao-kevin-li/',
      email: 'kevnli2002@gmail.com',
      briefcase: 'https://gossamer-comet-pie.glitch.me/',
      color: 'Orange',
    },
  ];
  return students;
};
const run = async () => {
  await createStudentsTable(baseId, token);
  metadata = await getTableMetadata(baseId, token);
  console.log(metadata);
  const tableId = getStudentTableId(metadata);
  console.log('Student TableID', tableId);
  const studentData = getStudentData();
  studentData.forEach(async (student) => {
    // Check if the student is already in the table
    const studentId = await getStudentId(baseId, tableId, token, student.name);
    if (!studentId) {
      const record = {
        fields: student,
      };
      await insertStudent(baseId, tableId, token, record);
    } else {
      const updated = await updateStudent(
        baseId,
        tableId,
        studentId,
        token,
        student
      );
      console.log(`Student ${student.name} exists and will be updated`);
      console.log(updated);
    }
  });
};

run();
