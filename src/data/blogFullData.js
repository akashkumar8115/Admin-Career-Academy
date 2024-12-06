import Blog1 from '../assets/blog/blog-01.jpg'
import Blog2 from '../assets/blog//blog-02.jpg'
import Blog3 from '../assets/blog/blog-03.jpg'
import Blog4 from '../assets/blog/blog-04.jpg'
import Blog5 from '../assets/blog/blog-05.jpg'
import Blog6 from '../assets/blog/blog-06.jpg'
export const blogData = [
    {
        id: 1,
        image: Blog1,
        tag: "Technology",
        date: "01 Oct, 2024",
        title: "How is technology working with new things?",
        description: "Discover how emerging technologies like AI, blockchain, and IoT are revolutionizing industries...",
        readTime: "5 min read",
        author: "Dr. Rajesh Kumar",
        category: "Tech Trends",
        fullContent: `
        <p>In the rapidly evolving landscape of technology, innovations are reshaping how we live and work...</p>
        <h2>The Rise of Artificial Intelligence</h2>
        <p>AI is transforming industries through machine learning algorithms and neural networks...</p>
        <h2>Blockchain Revolution</h2>
        <p>Decentralized systems are creating new possibilities for secure transactions...</p>
        <h2>Internet of Things (IoT)</h2>
        <p>Connected devices are creating smart environments and improving efficiency...</p>
      `,
        comments: [
            {
                id: 1,
                author: { name: "John Doe", avatar: "/avatars/john.jpg" },
                date: "2 days ago",
                content: "Great insights on emerging technologies!",
                likes: 15
            }
        ]
    },
    {
        id: 2,
        image: Blog2,
        tag: "AI",
        date: "05 Oct, 2024",
        title: "The Impact of AI on the Job Market",
        description: "Explore how AI is influencing employment trends and creating new opportunities...",
        readTime: "6 min read",
        author: "Priya Sharma",
        category: "Artificial Intelligence",
        fullContent: `
        <p>The increasing adoption of AI technologies is reshaping the job market. While some fear job loss, many...</p>
        <h2>Automation and Job Displacement</h2>
        <p>AI-driven automation is taking over routine tasks, but new roles are emerging...</p>
        <h2>AI and New Job Creation</h2>
        <p>AI is also creating demand for new skills, including data science and AI ethics...</p>
      `,
        comments: [
            {
                id: 2,
                author: { name: "Alex Smith", avatar: "/avatars/alex.jpg" },
                date: "3 days ago",
                content: "AI will definitely change the job market, for better or worse.",
                likes: 12
            }
        ]
    },
    {
        id: 3,
        image: Blog3,
        tag: "Data Science",
        date: "10 Oct, 2024",
        title: "Top Data Science Tools You Should Know",
        description: "A look at the most popular tools used in data science today...",
        readTime: "4 min read",
        author: "Neha Gupta",
        category: "Data Science",
        fullContent: `
        <p>Data science relies on a variety of tools that help analyze, visualize, and make predictions...</p>
        <h2>Python and R</h2>
        <p>Python and R are foundational for data science, offering libraries for data analysis...</p>
        <h2>Data Visualization Tools</h2>
        <p>Tools like Tableau and Power BI are essential for presenting data insights...</p>
      `,
        comments: [
            {
                id: 3,
                author: { name: "Sandra Lee", avatar: "/avatars/sandra.jpg" },
                date: "1 day ago",
                content: "Love these tools! Tableau has changed the way I present data.",
                likes: 18
            }
        ]
    },
    {
        id: 4,
        image: Blog4,
        tag: "Business",
        date: "15 Oct, 2024",
        title: "Digital Transformation in Small Businesses",
        description: "Explore how digital transformation is essential for small businesses to thrive...",
        readTime: "7 min read",
        author: "Amit Patel",
        category: "Digital Transformation",
        fullContent: `
        <p>Small businesses can leverage digital tools to compete with larger corporations...</p>
        <h2>Adopting Digital Tools</h2>
        <p>From CRMs to marketing automation, digital tools streamline operations...</p>
        <h2>Challenges Faced</h2>
        <p>However, many small businesses face barriers like cost and skills shortages...</p>
      `,
        comments: [
            {
                id: 4,
                author: { name: "Michael Brown", avatar: "/avatars/michael.jpg" },
                date: "5 days ago",
                content: "Digital transformation has been a game-changer for my business.",
                likes: 20
            }
        ]
    },
    {
        id: 5,
        image: Blog5,
        tag: "Security",
        date: "20 Oct, 2024",
        title: "Cybersecurity Essentials for 2024",
        description: "Learn the key practices to protect your business from cyber threats in 2024...",
        readTime: "9 min read",
        author: "Vikram Singh",
        category: "Cybersecurity",
        fullContent: `
        <p>Cybersecurity is more critical than ever as cyber threats evolve...</p>
        <h2>Common Threats</h2>
        <p>Phishing, ransomware, and DDoS attacks are on the rise, impacting businesses...</p>
        <h2>Best Practices</h2>
        <p>Using multi-factor authentication and data encryption can enhance security...</p>
      `,
        comments: [
            {
                id: 5,
                author: { name: "Lucy Harper", avatar: "/avatars/lucy.jpg" },
                date: "6 days ago",
                content: "Cybersecurity is a must in today's digital world!",
                likes: 22
            }
        ]
    },
    {
        id: 6,
        image: Blog6,
        tag: "Cloud Computing",
        date: "25 Oct, 2024",
        title: "Cloud Computing Trends for 2025",
        description: "A deep dive into upcoming trends in cloud technology and how businesses can prepare...",
        readTime: "10 min read",
        author: "Dr. Sarah Johnson",
        category: "Cloud Technology",
        fullContent: `
        <p>Cloud computing is continuously evolving, with new trends like hybrid and multi-cloud...</p>
        <h2>Hybrid Cloud Models</h2>
        <p>Many businesses are adopting hybrid clouds for flexibility...</p>
        <h2>Edge Computing</h2>
        <p>With IoT, edge computing is reducing latency by bringing computation closer to data sources...</p>
    `,
        comments: [
            {
                id: 6,
                author: { name: "Brian Lee", avatar: "/avatars/brian.jpg" },
                date: "1 week ago",
                content: "Cloud computing is the future!",
                likes: 25
            }
        ]
    },

    {
        id: 7,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5_j5_g94I1HbuT3XahzB3jTQQzvE3fijRQ&s",
        tag: "Software Development",
        date: "28 Oct, 2024",
        title: "Microservices Architecture: Pros and Cons",
        description: "Examine the benefits and challenges of adopting a microservices architecture...",
        readTime: "7 min read",
        author: "Priya Sharma",
        category: "Software Architecture",
        fullContent: `
            <p>Microservices architecture has gained popularity for its scalability...</p>
            <h2>Benefits of Microservices</h2>
            <p>Flexibility and easier deployment are some of the primary advantages...</p>
            <h2>Challenges to Consider</h2>
            <p>However, microservices come with challenges like complexity and data management...</p>
          `,
        comments: [
            {
                id: 7,
                author: { name: "Emma Watson", avatar: "/avatars/emma.jpg" },
                date: "3 days ago",
                content: "A balanced view on microservices, thanks!",
                likes: 10
            }
        ]
    },
    {
        id: 8,
        image: "https://community.nasscom.in/sites/default/files/styles/960_x_600/public/media/images/0x0%20%281%29.jpg?itok=PEVCtsx2",
        tag: "Tech Careers",
        date: "30 Oct, 2024",
        title: "Becoming a Full-Stack Developer in 2024",
        description: "An in-depth guide on the skills needed to succeed as a full-stack developer...",
        readTime: "5 min read",
        author: "Neha Gupta",
        category: "Career Development",
        fullContent: `
            <p>Full-stack development involves working on both front-end and back-end technologies...</p>
            <h2>Core Skills to Master</h2>
            <p>HTML, CSS, JavaScript for the front-end, and Node.js, Python, or Java for the back-end...</p>
          `,
        comments: [
            {
                id: 8,
                author: { name: "David Lee", avatar: "/avatars/david.jpg" },
                date: "2 days ago",
                content: "Very helpful tips for those starting out!",
                likes: 17
            }
        ]
    },
    {
        id: 9,
        image: "data:image/png;base64,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",
        tag: "Marketing",
        date: "01 Nov, 2024",
        title: "How AI is Revolutionizing Digital Marketing",
        description: "Explore how AI is shaping digital marketing strategies and customer engagement...",
        readTime: "6 min read",
        author: "Vikram Singh",
        category: "Digital Marketing",
        fullContent: `
            <p>AI tools are now a key component of successful digital marketing strategies...</p>
            <h2>Personalized Marketing</h2>
            <p>AI enables personalized marketing by analyzing customer behavior and preferences...</p>
          `,
        comments: [
            {
                id: 9,
                author: { name: "Sophia Wang", avatar: "/avatars/sophia.jpg" },
                date: "1 day ago",
                content: "AI is truly transforming marketing. Great read!",
                likes: 14
            }
        ]
    },
    {
        id: 10,
        image: "https://fastercapital.co/i/The-Top-Startups-to-Watch-in--The-Top-Startups-to-Watch-in-2024.webp",

        tag: "Innovation",
        date: "05 Nov, 2024",
        title: "5G: The Future of Connectivity",
        description: "Dive into the world of 5G technology and what it means for the future...",
        readTime: "8 min read",
        author: "Amit Patel",
        category: "Telecommunications",
        fullContent: `
            <p>The rollout of 5G is set to bring faster connectivity and better network reliability...</p>
            <h2>Advantages of 5G</h2>
            <p>Faster speeds and lower latency are among the many benefits of 5G...</p>
          `,
        comments: [
            {
                id: 10,
                author: { name: "Liam Turner", avatar: "/avatars/liam.jpg" },
                date: "4 days ago",
                content: "Excited to see how 5G changes our devices!",
                likes: 19
            }
        ]
    },
    {
        id: 11,
        image: "https://artificialpaintings.com/wp-content/uploads/2024/06/1732_IoT_in_the_Smart_Home_Future_Trends_and_Innovations.webp",

        tag: "Programming",
        date: "10 Nov, 2024",
        title: "Top 10 JavaScript Frameworks for 2024",
        description: "Find out the most popular JavaScript frameworks and libraries to use...",
        readTime: "7 min read",
        author: "Dr. Sarah Johnson",
        category: "Web Development",
        fullContent: `
            <p>JavaScript frameworks streamline web development and offer powerful tools...</p>
            <h2>Popular Frameworks</h2>
            <p>React, Angular, and Vue.js remain popular choices in 2024...</p>
          `,
        comments: [
            {
                id: 11,
                author: { name: "Chris Martin", avatar: "/avatars/chris.jpg" },
                date: "5 days ago",
                content: "React has been my go-to framework. Solid recommendations here.",
                likes: 22
            }
        ]
    },
    {
        id: 12,
        image: "https://www.supplychainbrain.com/ext/resources/2024/02/06/HEALTHCARE-ARTIFICIAL-INTELLIGENCE-AI-iStock--FotografieLink--1517344698.jpg?t=1707282440&width=1080",

        tag: "Design",
        date: "15 Nov, 2024",
        title: "User-Centered Design Principles for 2024",
        description: "Discover key design principles that focus on user experience...",
        readTime: "4 min read",
        author: "Priya Sharma",
        category: "UX Design",
        fullContent: `
            <p>Designing with the user in mind has become a staple for creating intuitive interfaces...</p>
            <h2>Empathy in Design</h2>
            <p>Understanding user needs and creating a seamless experience is vital...</p>
          `,
        comments: [
            {
                id: 12,
                author: { name: "Maria Gonzales", avatar: "/avatars/maria.jpg" },
                date: "3 days ago",
                content: "Great article on focusing on user experience!",
                likes: 25
            }
        ]
    },
    {
        id: 13,
        image: "https://media.licdn.com/dms/image/v2/D5612AQG1NSJkx7WYKQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691662028934?e=1736985600&v=beta&t=KDDIKw3taUKCANzDrvv3XTan-vojL2lCGi-zUibIogE",

        tag: "Machine Learning",
        date: "18 Nov, 2024",
        title: "Machine Learning in Predictive Analytics",
        description: "An overview of how machine learning is applied in predictive analytics...",
        readTime: "8 min read",
        author: "Neha Gupta",
        category: "Machine Learning",
        fullContent: `
            <p>Predictive analytics uses machine learning to forecast trends and outcomes...</p>
            <h2>Applications of Predictive Analytics</h2>
            <p>Used widely in finance, healthcare, and marketing for informed decisions...</p>
          `,
        comments: [
            {
                id: 13,
                author: { name: "Nina Patel", avatar: "/avatars/nina.jpg" },
                date: "2 days ago",
                content: "Very informative, especially for beginners!",
                likes: 30
            }
        ]
    },
    {
        id: 14,
        image: "https://d1hah6ww96mip9.cloudfront.net/layout/banners/promotions/BLOG_METADATA_COVER_IMAGES/IMG_1685420999769_a28d722aee8641eaa165b9b41cdf7d4d-1p872-w1396p0-h746p0-en_v1.jpg",

        tag: "Cloud Computing",
        date: "20 Nov, 2024",
        title: "Hybrid Cloud Solutions for Businesses",
        description: "Exploring the benefits of a hybrid cloud approach for enterprises...",
        readTime: "7 min read",
        author: "Vikram Singh",
        category: "Cloud Technology",
        fullContent: `
            <p>Hybrid cloud offers flexibility and scalability for companies of all sizes...</p>
            <h2>Benefits of Hybrid Cloud</h2>
            <p>Organizations can use private and public clouds for cost savings...</p>
          `,
        comments: [
            {
                id: 14,
                author: { name: "Tom Hill", avatar: "/avatars/tom.jpg" },
                date: "6 days ago",
                content: "Hybrid cloud has been a great option for our team.",
                likes: 24
            }
        ]
    },
    {
        id: 15,
        image: "https://media.licdn.com/dms/image/v2/D5612AQEoYlNaXZN27g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709821633261?e=1736985600&v=beta&t=0DbrYlSIauU-McSRc_BknctbkqDX9545dfv55lAYzNY",

        tag: "Blockchain",
        date: "22 Nov, 2024",
        title: "Blockchain Beyond Cryptocurrency",
        description: "Discover how blockchain is being used in industries beyond finance, like healthcare and supply chain.",
        readTime: "6 min read",
        author: "Amit Patel",
        category: "Blockchain Technology",
        fullContent: `
        <p>Blockchain technology is becoming a cornerstone for transparent and decentralized solutions...</p>
        <h2>Supply Chain Transparency</h2>
        <p>Using blockchain, companies can trace product journeys, ensuring quality and authenticity...</p>
        <h2>Healthcare Record Management</h2>
        <p>Secure and immutable records provide a seamless experience in patient data handling...</p>
      `,
        comments: [
            {
                id: 15,
                author: { name: "Olivia Adams", avatar: "/avatars/olivia.jpg" },
                date: "3 days ago",
                content: "Interesting applications beyond just finance!",
                likes: 12
            }
        ]
    },
    {
        id: 16,
        image: "https://media.licdn.com/dms/image/D4E12AQH3-6lkwjJspw/article-cover_image-shrink_600_2000/0/1709816925133?e=2147483647&v=beta&t=LlcqqDRCmSfyFgzmMv0XJrHGRlgHAt5Mfmtx5_0xjLc",

        tag: "Sustainability",
        date: "25 Nov, 2024",
        title: "Green Tech Innovations for a Sustainable Future",
        description: "Explore cutting-edge green technologies and how they are contributing to sustainability.",
        readTime: "7 min read",
        author: "Dr. Rajesh Kumar",
        category: "Environmental Technology",
        fullContent: `
        <p>With climate change at the forefront, technology is driving solutions for a sustainable future...</p>
        <h2>Renewable Energy Advances</h2>
        <p>Technologies in solar, wind, and hydroelectric are becoming more efficient...</p>
        <h2>Smart Cities</h2>
        <p>Smart grids, waste management, and water conservation are creating sustainable urban solutions...</p>
      `,
        comments: [
            {
                id: 16,
                author: { name: "Henry Baker", avatar: "/avatars/henry.jpg" },
                date: "4 days ago",
                content: "Great insight into how tech is helping the environment!",
                likes: 21
            }
        ]
    },
    {
        id: 17,
        image: "https://www.goodnet.org/photos/281x197/33464_hd.jpg",

        tag: "Education",
        date: "28 Nov, 2024",
        title: "E-Learning Trends in 2024",
        description: "From VR to AI-driven personalization, explore the latest trends in online education.",
        readTime: "5 min read",
        author: "Priya Sharma",
        category: "Education Technology",
        fullContent: `
        <p>The world of education is undergoing a digital transformation, enabling remote and personalized learning...</p>
        <h2>AI-Driven Personalization</h2>
        <p>Adaptive learning technologies tailor content to individual learning styles...</p>
        <h2>Virtual Reality in Classrooms</h2>
        <p>VR provides immersive experiences, enhancing learning engagement...</p>
      `,
        comments: [
            {
                id: 17,
                author: { name: "Isabella Chen", avatar: "/avatars/isabella.jpg" },
                date: "2 days ago",
                content: "E-learning has really come a long way!",
                likes: 18
            }
        ]
    },
    {
        id: 18,
        image: "https://media.licdn.com/dms/image/D4E12AQGOq8UkEd-iCQ/article-cover_image-shrink_720_1280/0/1699628089782?e=2147483647&v=beta&t=tfupFW3fy9LQcJmCYez6fVPJDO8UE382aQPA9Qj0apI",

        tag: "Fintech",
        date: "01 Dec, 2024",
        title: "Digital Wallets and the Future of Payments",
        description: "How digital wallets are transforming the way we handle money and transactions.",
        readTime: "6 min read",
        author: "Neha Gupta",
        category: "Financial Technology",
        fullContent: `
        <p>Digital wallets offer convenience and security, rapidly replacing traditional payment methods...</p>
        <h2>Popular Digital Wallets</h2>
        <p>Wallets like Apple Pay, Google Wallet, and Samsung Pay are leading the charge...</p>
        <h2>Security Features</h2>
        <p>Biometrics and encryption ensure user data and funds remain secure...</p>
      `,
        comments: [
            {
                id: 18,
                author: { name: "Lily Roberts", avatar: "/avatars/lily.jpg" },
                date: "3 days ago",
                content: "Excited to see how these tools evolve further!",
                likes: 20
            }
        ]
    },
    {
        id: 19,
        image: "https://cms.recordedfuture.com/uploads/Emerging_Threats_Social_Image_a7f31a8286.webp",

        tag: "Health Tech",
        date: "05 Dec, 2024",
        title: "The Role of AI in Diagnostics",
        description: "Learn how AI is aiding healthcare professionals in diagnosing diseases accurately and efficiently.",
        readTime: "7 min read",
        author: "Dr. Sarah Johnson",
        category: "Healthcare Innovation",
        fullContent: `
        <p>AI is revolutionizing diagnostics by identifying patterns in medical imaging and data...</p>
        <h2>Machine Learning in Radiology</h2>
        <p>AI assists radiologists by highlighting potential areas of concern in scans...</p>
        <h2>Predictive Analytics in Patient Care</h2>
        <p>Advanced algorithms can predict patient outcomes and help in preventative care...</p>
      `,
        comments: [
            {
                id: 19,
                author: { name: "Ethan Carter", avatar: "/avatars/ethan.jpg" },
                date: "1 day ago",
                content: "The future of AI in medicine is very promising!",
                likes: 30
            }
        ]
    },
    {
        id: 20,
        image: "https://media.licdn.com/dms/image/D4D12AQEYoNtJcCWZwA/article-cover_image-shrink_720_1280/0/1687263010036?e=2147483647&v=beta&t=tOCqw2AVV5SnXTVBuHLV1grjZRIA_aQ4wqfNTpuZS80",

        tag: "Remote Work",
        date: "10 Dec, 2024",
        title: "Remote Work Technology for 2024",
        description: "A guide to the latest tools and technologies enabling remote work and collaboration.",
        readTime: "6 min read",
        author: "Vikram Singh",
        category: "Workplace Technology",
        fullContent: `
        <p>Remote work is here to stay, and new technologies are enhancing collaboration and productivity...</p>
        <h2>Virtual Meeting Platforms</h2>
        <p>Zoom, Microsoft Teams, and new contenders are reshaping virtual meetings...</p>
        <h2>Project Management Tools</h2>
        <p>Trello, Asana, and Monday.com streamline remote project tracking...</p>
      `,
        comments: [
            {
                id: 20,
                author: { name: "Chloe Morgan", avatar: "/avatars/chloe.jpg" },
                date: "4 days ago",
                content: "Remote work has become so much easier with these tools!",
                likes: 22
            }
        ]
    }

    // Add additional entries up to 20
];
