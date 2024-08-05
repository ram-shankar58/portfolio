import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Visual Authentication System',
        description: "Developed an authentication software which uses Visual cryptography to act as a security mechanism. The system creates shares by splitting the pixels of a registered image, which are encrypted internally, serving as the key. Additionally, the user is also asked to select a point chosen during registration for authentication as a second safety layer.",
        tools: ['Python', 'OpenCV'],
        role: 'Software Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Text Summarizer',
        description: 'Implemented a text summarizer model using Auto encoders which takes input text and generates an abstract summary. Also used implemented text summarization using other LLMs like BERT and GPT-2, which could generate Abstract, executive summaries, paraphrase texts and also generate query-based summaries, which emphasize around the points taken as query input from the user.',
        tools: ['Python','Tensorflow','PyTorch','BERT','GPT-2'],
        role: 'Machine Learning Integration',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Personal Finance Management System',
        description: 'Developed a Personal Finance Management System which keeps track of incomes and expenditures, along with other finance port- folios. The application computes tax payments and other financial interests like loans, EMIs, etc.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'MongoDB','Redux','JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Polycystic Ovary Syndrome Detection Model',
        description: "to detect Polycystic Ovary Syndrome (PCOS) from MRI images. The customized models consist of an ensemble model comprising of DenseNet, ANN, and a customized CNN, and a Deep Belief Network (DBN) model.",
        tools: ['Python', 'Tensorflow', 'Keras', 'OpenCV'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },