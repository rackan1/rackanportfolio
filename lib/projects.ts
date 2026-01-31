export interface Project {
  id: string
  title: string
  category: string
  shortDescription: string
  description: string
  image: string
  technologies: string[]
  features: string[]
  challenges: string[]
  outcomes: string[]
  github?: string
  demo?: string
  year: string
  gallery?: {
    src: string
    caption?: string
    }[]
  galleryZoom?: number
  galleryLayout?: "single"

 
}

export const projects: Project[] = [
  {
    id: "tesla-cybercab-fixtures",
    title: "Tesla CyberCab Safety Sensor Fixtures",
    category: "Automotive Safety",
    shortDescription: "Precision-engineered safety sensor fixtures for Tesla's next-generation autonomous vehicle program.",
    description: "Led the design and delivery of advanced safety sensor fixtures critical for Tesla's CyberCab program at Veoneer Canada Safety Systems. These precision-engineered fixtures were essential in conducting final validation testing, directly influencing the development of next-generation vehicle safety systems.",
    image: "/projects/robotaxi.png",
    technologies: ["SolidWorks", "Autodesk Inventor", "Validation Testing", "Precision Engineering", "Safety Systems"],
    features: [
      "Precision-engineered mounting fixtures for safety sensors",
      "Designed for final validation testing requirements",
      "Compatible with autonomous vehicle sensor arrays",
      "Meets automotive safety standards"
    ],
    challenges: [
      "Meeting strict tolerance requirements for sensor alignment",
      "Designing for multiple sensor configurations",
      "Ensuring compatibility with automated testing equipment"
    ],
    outcomes: [
      "Successfully delivered fixtures for Tesla CyberCab program",
      "Directly influenced next-generation vehicle safety systems",
      "Enabled critical final validation testing"
    ],
    year: "2025", 
    gallery: [
      {
        src: "/projects/tesla/tesla1.png",
        caption: "Figure1: TESLA vs Ford RSU sensors."
      },
      {
        src: "/projects/tesla/tesla2.png",
        caption: "Figure 2: TESLA RSU Final Test Fixture CAD Assembly"
      },
      {
        src: "/projects/tesla/tesla3.png",
        caption: "Figure 3: TESLA RSU Final Test Fixture"
      },
      
    ]


  },
  {
    id: "scheduling-platform",
    title: "C# Automatic Production Scheduling Platform",
    category: "Software Development",
    shortDescription: "Revolutionary scheduling platform that eliminated human error and became the benchmark across manufacturing lines.",
    description: "Pioneered the development of a comprehensive C# scheduling platform at Veoneer that transformed production planning operations. The platform revolutionized how manufacturing schedules were created and managed, eliminating human error and becoming the standard tool adopted across multiple manufacturing lines.",
    image: "/projects/schedule.png",
    technologies: ["C#", ".NET", "Database Management", "UI/UX Design", "Production Planning"],
    features: [
      "Automated scheduling algorithm for production lines",
      "Error detection and prevention mechanisms",
      "Real-time schedule updates and notifications",
      "Integration with existing manufacturing systems"
    ],
    challenges: [
      "Understanding complex production workflows",
      "Designing intuitive interface for operators",
      "Ensuring system reliability for continuous operation"
    ],
    outcomes: [
      "Eliminated human error in production planning",
      "Adopted as benchmark tool across multiple manufacturing lines",
      "Revolutionized production planning workflow"
    ],
    year: "2025", 
    gallery: [{
      src:"/projects/build/build1.png",
      caption: "Figure 1: Build Scheduler interface"
    },
    {
      src:"/projects/build/build2.png",
      caption: "Figure 2: Build Scheduler generated report"
    }
    ]
  },
  {
    id: "pressfit-automation",
    title: "Pressfit Robot Data Automation",
    category: "Software Development",
    shortDescription: "Automated data parsing system achieving 30x efficiency gain in report generation.",
    description: "Developed an automated system for parsing and exporting pressfit robot data at Veoneer, dramatically reducing report generation time from over 30 minutes to under 1 minute. This 30x efficiency gain set a new benchmark for operational excellence in the manufacturing environment.",
    image: "/projects/robotic-arm.jpg",
    technologies: ["Python", "C#", "Data Parsing", "Automation Scripts", "Report Generation"],
    features: [
      "Automated data extraction from robot systems",
      "Intelligent parsing of complex manufacturing data",
      "Standardized report formatting and export",
      "Error handling and data validation"
    ],
    challenges: [
      "Parsing diverse data formats from robot systems",
      "Maintaining data integrity during processing",
      "Creating flexible system for varying report requirements"
    ],
    outcomes: [
      "Reduced report generation from 30+ minutes to under 1 minute",
      "Achieved 30x efficiency improvement",
      "Set new benchmark for operational excellence"
    ],
    year: "2025", 
    gallery: [{
      src:"/projects/cpk/cpk1.png",
      caption: "Figure 1: Auto-Pressfit CPK Extractor interface"
    },
    {
      src:"/projects/cpk/cpk2.png",
      caption: "Figure 2: Output with force and displacement values ready for validation"
    },
    {
      src:"/projects/cpk/cpk3.png",
      caption: "Figure 3: Sample data from pressfit robot"
    }
    ]
  },
  {
    id: "plc-optimization",
    title: "PLC Logic Optimization & HMI Revamp for Production Lines",
    category: "Control Systems",
    shortDescription: "PLC reprogramming and HMI redesign that improved cycle time, stability, and operator visibility across automotive production lines.",
    description: "Optimized PLC control logic and parameters on high-volume automotive production lines at Veoneer to improve cycle time, stability, and run-rate consistency. Actively tuned live control logic without disrupting operations and helped design a revamped HMI for new production lines, improving alarm clarity, operating mode visibility, and operator interaction during changeovers and fault recovery.",
    image: "/projects/cnc-controller.jpg",
    technologies: ["PLC Programming", "MATLAB", "Statistical Analysis", "CPK Analysis", "Gage R&R"],
    features: [
      "PLC parameter tuning and logic optimization for cycle-time improvement",
      "Revamped HMI design for new production lines",
      "Improved alarm visibility and operating mode clarity",
      "Live production tuning without disrupting operations",
      "Enhanced operator interaction during changeovers and fault recovery"
    ]
    ,
    challenges: [
      "Optimizing cycle time while maintaining process stability",
      "Making PLC changes on live, high-volume production lines",
      "Designing HMIs that are intuitive for operators under time pressure",
      "Balancing automation efficiency with human interaction constraints"
    ]
    ,
    outcomes: [
      "Improved cycle time through targeted PLC parameter optimization",
      "Delivered a revamped HMI adopted on new production lines",
      "Reduced operator ambiguity during alarms and changeovers",
      "Improved production stability and smoother line launches"
    ]
    ,
    year: "2024", 
    gallery: [{
      src:"/projects/plc/plc.png",
      caption: "Figure 1: HMI revamp for new lines"
    }
    ,{
      src:"/projects/plc/plc2.png",
      caption: "Figure 2: Auto Pincheck detection"
    }
    ]
  },
  {
    id: "hospital-power-systems",
    title: "Healthcare Power Distribution",
    category: "Power Systems",
    shortDescription: "Critical power distribution systems for hospitals including SickKids Hospital in Toronto.",
    description: "Designed and serviced power distribution systems for multiple hospitals at Eastenghouse Inc., including the new SickKids Hospital wing in downtown Toronto. These systems ensured uninterrupted operation of life-support equipment during utility outages, meeting the highest standards for healthcare facility reliability.",
    image: "/projects/ct.png",
    technologies: ["SKM Power Tools", "Switchgear", "Transformers", "Generators", "PLCs", "HMIs"],
    features: [
      "Redundant power distribution architecture",
      "Automatic transfer switch integration",
      "Life-support equipment priority circuits",
      "Emergency generator coordination"
    ],
    challenges: [
      "Ensuring zero downtime for life-support systems",
      "Meeting stringent healthcare facility codes",
      "Coordinating multiple power sources seamlessly"
    ],
    outcomes: [
      "Delivered solutions for 10+ projects",
      "Ensured continuous power for critical healthcare equipment",
      "Met rigorous industry standards for reliability"
    ],
    year: "2023", 
    gallery: [{
      src:"/projects/hos/hos1.png",
      caption: "Figure 1: SickKids Hospital emergency switchboard"
    },
    {
      src:"/projects/hos/hos2.png",
      caption: "Figure 2: Emergency generator"
    }
    ]
  },
  {
    id: "operator-response-monitoring",
    title: "Operator Response Monitoring System",
    category: "Control Systems",
    shortDescription: "PLC-integrated monitoring system that transformed operator response time from an implicit assumption into a measurable, actionable signal.",
    description: "Developed an operator response monitoring system for a high-volume automotive production line at Veoneer to reduce human-induced delays during manual changeover steps. The system objectively measured the time required for an operator to remove a completed part and install a new housing—providing cycle-time visibility for a process that was previously unmonitored. Implementation was achieved by integrating directly into existing OMRON PLC control logic using Sysmac Studio, extending live machine state tracking with timing and state-based logic without disrupting normal operations. A real-time HMI visualization was designed to display response times against target thresholds, historical trends, and over-target events, enabling engineers and operators to identify bottlenecks and performance deviations across shifts. The solution proved highly successful and was subsequently deployed across every production line in the plant, standardizing operator response measurement and enabling data-driven process optimization at scale.",
    image: "/projects/operator-response.png",
    technologies: [
      "OMRON PLCs",
      "Sysmac Studio",
      "PLC Programming",
      "HMI Design",
      "State Machines",
      "Cycle Time Analysis",
      "Manufacturing Automation"
    ],
    features: [
      "Real-time operator response time measurement",
      "PLC-integrated state and timing logic",
      "Non-intrusive integration into live production systems",
      "Real-time HMI visualization with thresholds and alerts",
      "Historical trend tracking across shifts"
    ],
    challenges: [
      "Integrating into existing PLC logic without disrupting production",
      "Accurately isolating operator response time from machine cycle time",
      "Designing intuitive HMI visuals for both operators and engineers"
    ],
    outcomes: [
      "Converted operator response from an implicit assumption into a measurable signal",
      "Enabled identification of bottlenecks and performance deviations",
      "Deployed across every production line in the plant",
      "Supported standardized, data-driven process optimization at scale"
    ],
    year: "2025", 
    gallery: [{
      src:"/projects/op/op.png",
      caption: "Figure 1: Operator respoonse Monitor hooked up to a line"
    }
    ]
  },

  {
    id: "eglinton-lrt",
    title: "Eglinton LRT Power Network",
    category: "Power Systems",
    shortDescription: "Parallel power distribution network interconnecting 25 stations for Toronto's largest transit expansion.",
    description: "Contributed to the Eglinton LRT Line project at Eastenghouse Inc., overseeing a parallel power distribution network that interconnects 25 stations. This work enhanced grid reliability for one of Toronto's largest transit expansions, ensuring consistent power delivery across the entire line.",
    image: "/projects/ttc.png",
    technologies: ["SKM Power Tools", "Short Circuit Analysis", "Arc Flash Studies", "Coordination Studies", "Harmonic Analysis"],
    features: [
      "Parallel power distribution architecture",
      "25-station interconnected network",
      "Advanced fault protection coordination",
      "Harmonic distortion mitigation"
    ],
    challenges: [
      "Coordinating power across 25 stations",
      "Ensuring fault isolation without service interruption",
      "Meeting transit authority reliability standards"
    ],
    outcomes: [
      "Enhanced grid reliability for major transit expansion",
      "Completed comprehensive safety studies",
      "Optimized power distribution for 25-station network"
    ],
    year: "2023", 
    gallery: [{
      src:"/projects/ttc/ttc3.png",
      caption: "Figure 1: LRT train"
    },
    {
      src:"/projects/ttc/ttc2.png",
      caption: "Figure 2: Paralllel Power drawings used for validaiton testing"
    },
    {
      src:"/projects/ttc/ttc1.png",
      caption: "Figure 3: One of the main high voltage switchboards on the parallel power system at Mount Dennis station"
    }
    ]
  },
  {
    id: "ping-pong-remastered",
    title: "Multiplayer Ping Pong Remastered",
    category: "Software / Game Dev",
    year: "2023",
    image: "/projects/pong/game.png", // update path if needed

    shortDescription:
      "A two-player Pong remaster built in Python featuring custom physics, progressive difficulty, audio, and real-time performance tracking.",

    description:
      "A remastered two-player Pong game developed in Python using Pygame. The project focuses on responsive physics, competitive multiplayer gameplay, progressive difficulty scaling, and polished audiovisual feedback.",

    technologies: [
      "Python",
      "Pygame",
      "Game Physics",
      "2D Graphics",
      "Input Handling"
    ],

    features: [
      "Two-player keyboard-controlled multiplayer",
      "Custom physics and collision handling",
      "Progressive difficulty scaling",
      "Audio effects and visual feedback",
      "Real-time FPS monitoring"
    ],

    challenges: [
      "Tuning collision physics for responsive gameplay",
      "Balancing difficulty progression without breaking pacing",
      "Maintaining consistent performance at higher speeds"
    ],

    outcomes: [
      "Delivered a polished and competitive multiplayer experience",
      "Strengthened understanding of real-time systems and game loops",
      "Improved skills in performance tuning and playtesting"
    ],

    gallery: [
      {
        src: "/projects/pong/start.png",
        caption: "Game start screen with player controls"
      },
      {
        src: "/projects/pong/gameplay.png",
        caption: "Live gameplay with score tracking and physics-based ball movement"
      },
      {
        src: "/projects/pong/gameover.png",
        caption: "Game over state displaying the winning player"
      }
    ]

  }

]

export function getProjectById(id: string): Project | undefined {
  return projects.find(project => project.id === id)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter(project => project.category === category)
}
