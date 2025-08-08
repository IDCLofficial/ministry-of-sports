import AnimatedEntrance from "../../components/AnimatedEntrance";
import { ANIMATION_PRESETS } from "../../utils/constants/animations";
import TabContentSystem from "../components/TabContentSystem";

export default function Department() {
    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <AnimatedEntrance {...ANIMATION_PRESETS.SECTION_FADE_IN}>
                <section className="relative bg-cover bg-center py-20 md:py-32" style={{ backgroundImage: 'url("/hero_section.png")' }}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                        <AnimatedEntrance {...ANIMATION_PRESETS.TITLE_FADE_DOWN}>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Ministry of Niger Delta Affairs and Intelligence<br />
                                Departments & Agencies
                            </h1>
                        </AnimatedEntrance>
                    </div>
                </section>
            </AnimatedEntrance>

            {/* Main Content Section with Tab System */}
            <TabContentSystem 
                sidebarTitle="Our Departments"
                tabs={[
                    {
                        id: "administration-hr",
                        label: "Administration & Human Resources",
                        content: {
                            title: "Department of Administration and Human Resources",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Administration and Human Resources",
                            description: "Administration & Human Resources ensures smooth ministry operations and an effective civil service. The department manages recruitment, training, welfare, and performance management to build a capable workforce that delivers on the ministry’s Niger Delta mandate.",
                            additionalInfo: [
                                "Oversee recruitment, onboarding, and staff records",
                                "Coordinate capacity building and training programmes",
                                "Implement performance management and promotions",
                                "Ensure staff welfare, discipline, and workplace compliance",
                                "Streamline administrative processes for efficient service delivery"
                            ]
                        }
                    },
                    {
                        id: "finance-accounts",
                        label: "Finance & Accounts",
                        content: {
                            title: "Department of Finance and Accounts",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Finance and Accounts",
                            description: "Finance & Accounts manages public funds with transparency and accountability. The department handles budgeting support, payments, cash management, and financial reporting for programmes and projects across oil‑producing communities.",
                            additionalInfo: [
                                "Process payments, grants, and project disbursements",
                                "Maintain cashbooks, ledgers, and audit‑ready records",
                                "Prepare periodic financial statements and reports",
                                "Enforce financial controls and expenditure compliance",
                                "Support transparency and value‑for‑money in spending"
                            ]
                        }
                    },
                    {
                        id: "planning-research-statistics",
                        label: "Planning, Research & Statistics",
                        content: {
                            title: "Department of Planning, Research, and Statistics",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Planning, Research, and Statistics",
                            description: "Planning, Research, and Statistics guides evidence‑based development using data and field intelligence. The department conducts studies, tracks KPIs, and aligns projects with state priorities and Niger Delta development goals.",
                            additionalInfo: [
                                "Conduct research and needs assessments in host communities",
                                "Develop multi‑year plans, M&E frameworks, and KPIs",
                                "Produce policy briefs, dashboards, and progress reports",
                                "Coordinate stakeholder inputs for data‑driven planning",
                                "Evaluate outcomes to improve programme impact"
                            ]
                        }
                    },
                    {
                        id: "community-development-advocacy",
                        label: "Community Development & Advocacy",
                        content: {
                            title: "Department of Community Development and Advocacy",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Community Development and Advocacy",
                            description: "Community Development and Advocacy leads engagement with youths, women, and traditional institutions. The department advances empowerment programmes, inclusion, and grievance resolution to promote peace and stability in oil‑producing LGAs.",
                            additionalInfo: [
                                "Facilitate youth and women empowerment initiatives",
                                "Strengthen community leadership and inclusive participation",
                                "Mediate grievances and foster peacebuilding",
                                "Coordinate outreach and stakeholder sensitization",
                                "Document impact stories and community feedback"
                            ]
                        }
                    },
                    {
                        id: "oil-company-relations",
                        label: "Oil Companies & Stakeholder Relations",
                        content: {
                            title: "Department of Oil Companies and Stakeholder Relations",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Oil Companies and Stakeholder Relations",
                            description: "Oil Companies and Stakeholder Relations safeguards host community interests and promotes fair benefits. The department interfaces with operators, regulators, and communities to ensure obligations are met and partnerships deliver local value.",
                            additionalInfo: [
                                "Liaise with oil and gas operators and regulators (e.g., NUPRC, NCDMB)",
                                "Monitor MoUs, CSR commitments, and obligations to communities",
                                "Resolve disputes and escalate non‑compliance",
                                "Champion local content and community benefit schemes",
                                "Facilitate joint visits, townhalls, and periodic reviews"
                            ]
                        }
                    },
                    {
                        id: "infrastructure-projects",
                        label: "Infrastructure & Project Implementation",
                        content: {
                            title: "Department of Infrastructure and Project Implementation",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Infrastructure and Project Implementation",
                            description: "Infrastructure and Project Implementation delivers roads, utilities, and community assets across the Niger Delta zones of Imo State. The department supervises contractors, enforces standards, and ensures timely, safe, and sustainable delivery.",
                            additionalInfo: [
                                "Scope, cost, and schedule projects with clear milestones",
                                "Supervise contractors and enforce quality/specifications",
                                "Coordinate with Works Ministry and ISOPADEC on delivery",
                                "Document site progress with geo‑tagged photos and reports",
                                "Hand over and maintain asset registers for communities"
                            ]
                        }
                    },
                    {
                        id: "environmental-protection",
                        label: "Environmental Protection & Restoration",
                        content: {
                            title: "Department of Environmental Protection and Restoration",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Environmental Protection and Restoration",
                            description: "Environmental Protection and Restoration addresses pollution, remediation, and climate resilience. The department collaborates with NOSDRA and Environment MDAs to prevent spills, restore ecosystems, and protect community health.",
                            additionalInfo: [
                                "Respond to oil spills and coordinate remediation efforts",
                                "Enforce environmental compliance and reporting",
                                "Promote clean‑up, reforestation, and waste management",
                                "Support environmental impact assessments (EIAs)",
                                "Educate communities on environmental safeguards"
                            ]
                        }
                    },
                    {
                        id: "intelligence-security",
                        label: "Intelligence & Security Coordination",
                        content: {
                            title: "Department of Intelligence and Security Coordination",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Department of Intelligence and Security Coordination",
                            description: "Intelligence and Security Coordination integrates community‑based intelligence into development and enforcement. The department works with the Navy, Police, DSS, and NSCDC to deter illegal bunkering, vandalism, and related threats.",
                            additionalInfo: [
                                "Gather and analyze field intelligence with community inputs",
                                "Coordinate joint operations with security agencies",
                                "Support early‑warning systems and incident response",
                                "Protect critical infrastructure and project sites",
                                "Promote lawful livelihoods as alternatives to illicit activity"
                            ]
                        }
                    },
                    {
                        id: "legal-compliance",
                        label: "Legal & Compliance Unit",
                        content: {
                            title: "Legal and Compliance Unit",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Legal and Compliance Unit",
                            description: "The Legal and Compliance Unit provides legal guidance and ensures adherence to statutes, regulations, and contracts. The unit drafts, reviews, and vets documents while supporting dispute resolution and institutional accountability.",
                            additionalInfo: [
                                "Draft, review, and vet contracts, MoUs, and SLAs",
                                "Ensure regulatory and procurement compliance",
                                "Represent the ministry in legal and mediation matters",
                                "Maintain legal risk registers and compliance audits",
                                "Advise departments on policy and statutory obligations"
                            ]
                        }
                    },
                    {
                        id: "pr-media",
                        label: "Public Relations & Media Unit",
                        content: {
                            title: "Public Relations and Media Unit",
                            imageSrc: "/assets/dpt.png",
                            imageAlt: "Public Relations and Media Unit",
                            description: "Public Relations and Media manages strategic communications, feedback, and transparency. The unit shares project updates, coordinates media engagements, and ensures open channels with communities and partners.",
                            additionalInfo: [
                                "Publish project updates and impact stories across channels",
                                "Organize press briefings, field coverage, and media tours",
                                "Manage enquiries, complaints, and stakeholder feedback",
                                "Maintain brand consistency and public information assets",
                                "Support transparency and community awareness campaigns"
                            ]
                        }
                    }
                ]}
            />
        </div>
    );
}
