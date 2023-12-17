import React from "react"
import Layout from "../../components/Layout"
import LinkGen from "../../components/LinkGen"

const Themes = () => {
  return (
    <Layout mainClass="themes" title="Themes">
      <h3 className="section-heading">Themes</h3>
      <table>
        <thead>
          <tr>
            <th>Theme</th>
            <th>Faculty</th>
            <th>Focus Areas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Biomedical Engineering & Medical Informatics</td>
            <LinkGen>
              Angshul Majumdar, Debarka Sengupta, Jainendra Shukla, V. Raghava
              Mutharaju
            </LinkGen>
            <td>
              Eye Tracking, Healthcare, Physiological Signals, Biomedical Signal
              Processing
            </td>
          </tr>
          <tr>
            <td>Computer Graphics & AR/VR</td>
            <LinkGen>Ojaswa Sharma</LinkGen>
            <td>
              Geometry processing, ML in graphics, Virtual and augmented reality
              (VR/AR), Volume visualization
            </td>
          </tr>
          <tr>
            <td>Computer Networks & Communications</td>
            <LinkGen>
              Arani Bhattacharya, Mukulika Maity, Pushpendra Singh, Piyus Kedia,
              Vivek Kumar, Rinku Shah, Dhruv Kumar
            </LinkGen>
            <td>
              Communication networks, IoT, Mobile computing, Mobile systems and
              middleware, Wireless network, Distributed computing, Mobile
              Computing, Pervasive computing, Sensing, Software-defined
              networking, Programmable data planes, Network function
              virtualization
            </td>
          </tr>
          <tr>
            <td>Computer Vision & Multimedia Computation</td>
            <LinkGen>
              Saket Anand, A V Subramanyam, Rajiv Ratn Shah, Koteswar Rao
              Jerripothula, Angshul Majumdar
            </LinkGen>
            <td>
              Visual Recognition, 3D Vision, Learning with Limited Supervision,
              Deep Learning, Transfer Learning, Information Forensics &
              Security, Visual Surveillance, Visual Tracking, Steganalysis,
              Multimodal deep learning, Event detection, Multimedia systems,
              Hyper-spectral Imaging, Medical Imaging
            </td>
          </tr>
          <tr>
            <td>Cybersecurity & Privacy</td>
            <LinkGen>
              Arun Balaji Buduru, Donghoon Chang, Sambuddho Chakravarty,
              Subhabrata Samajder
            </LinkGen>
            <td>
              Adaptive security, Biometric security, Blockchain, Cryptography,
              Cryptanalysis, Cyber security, IoT security, Network Security,
              Privacy, Protocols, Privacy, Anonymity, Security and privacy in
              online social media, Theory and practice of cryptography, Traffic
              analysis, Usable security
            </td>
          </tr>
          <tr>
            <td>Data Management & Data Science</td>
            <LinkGen>
              Mukesh Mohania, Tanmoy Chakraborty, Vikram Goyal, Md. Shad Akhtar,
              V. Raghava Mutharaju, Arun Balaji Buduru, Bapi Chatterjee, Dhruv
              Kumar
            </LinkGen>
            <td>
              Big data analytics, Complex network, Data-driven security, Data
              engineering, Data mining, Data privacy and security, Data science,
              Knowledge graphs, Natural language processing, Semantic Web,
              Social media analysis, Social networks, Entity Discovery and
              Analytics, Blockchain Data Management, AI for Data, Cognitive
              Information Systems, AI-driven scalable data systems, In-memory
              database
            </td>
          </tr>
          <tr>
            <td>Hardware, Robotics & Electronics</td>
            <LinkGen>Jainendra Shukla, Sujay Deb</LinkGen>
            <td>
              Human Robot Interaction, Social Robotics, Hardware Security,
              Design of novel interconnect architectures for multi-core chips,
              Heterogeneous System Architectures
            </td>
          </tr>
          <tr>
            <td>HCI & Human Centered Computing</td>
            <LinkGen>Pushpendra Singh, Jainendra Shukla, Dhruv Kumar</LinkGen>
            <td>HCI4D, Public Health, Education</td>
          </tr>
          <tr>
            <td>Machine Learning & AI</td>
            <LinkGen>
              Saket Anand, Tanmoy Chakraborty, Rajiv Ratn Shah, Md. Shad Akhtar,
              Angshul Majumdar, Bapi Chatterjee, V. Raghava Mutharaju, Vikram
              Goyal, Jainendra Shukla, Pushpendra Singh, Vinayak Abrol, Dhruv
              Kumar
            </LinkGen>
            <td>
              Pattern classification, Low-rank matrix completion, Collaborative
              Filtering, Natural Language Processing, Information Retrieval,
              Scalable Machine Learning, Automated Machine Learning, Neural
              Architecture Search, EdgeAI, Human-Centered AI, Ethics
            </td>
          </tr>
          <tr>
            <td>Signal Processing</td>
            <LinkGen>
              Vinayak Abrol, Angshul Majumdar, Rajiv Ratn Shah, Koteswar Rao
              Jerripothula
            </LinkGen>
            <td>
              Speech and Image processing or coding, sparsity aware signal
              processing, voice biometrics, atypical speech processing, audio
              categorization, Joint Image Processing
            </td>
          </tr>
          <tr>
            <td>Software Engineering & Programming</td>
            <LinkGen>
              Piyus Kedia, Vivek Kumar, Pankaj Jalote, Bapi Chatterjee
            </LinkGen>
            <td>
              Parallel programming models, Runtime systems, Code search and
              comprehension, Domain specific languages, Parallel programming,
              Concurrent Data Structures, Learned Data Structures, Ptrogram
              analysis and verification, Program optimization. Cloud computing,
              Deterministic execution, Memory safety, OS design, System
              Security, Virtual Machines
            </td>
          </tr>
          <tr>
            <td>Theoretical Computer Science</td>
            <LinkGen>
              Debajyoti Bera, Rajiv Raman, Syamantak Das, Diptapriyo Majumdar
            </LinkGen>
            <td>
              Algorithm design and analysis, Algorithm engineering,
              Combinatorial optimization, Complexity theory, Discrete and
              computational geometry, Graph theory, Online algorithms, Quantum
              computing, Parameterized Algorithms
            </td>
          </tr>
        </tbody>
      </table>
    </Layout>
  )
}

export default Themes
