import React, { useState } from 'react';
import './Services.css';

// Import gold icons
import corporateIcon from '../../assets/icons/gold-shield.svg';
import ipIcon from '../../assets/icons/gold-award.svg';
import bankingIcon from '../../assets/icons/gold-medal.svg';
import employmentIcon from '../../assets/icons/gold-star.svg';
import taxIcon from '../../assets/icons/gold-shield.svg';
import energyIcon from '../../assets/icons/gold-clock.svg';
import procurementIcon from '../../assets/icons/gold-award.svg';
import dataIcon from '../../assets/icons/gold-medal.svg';
import arbitrationIcon from '../../assets/icons/gold-star.svg';
import environmentIcon from '../../assets/icons/gold-clock.svg';

const Services = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const initialCategories = [
    { 
      id: 1,
      icon: corporateIcon, 
      title: 'Corporate & Commercial Litigation', 
      description: 'High-stakes representation for complex business disputes involving major financial, governance, or operational risks.',
      fullDescription: `High-stakes representation for complex business disputes involving major financial, governance, or operational risks. This practice focuses on protecting corporate interests through strategic litigation, arbitration, and negotiated resolution.`,
      subBranches: [
        'Shareholder & Partnership Disputes - Resolving equity conflicts, oppression claims, deadlocks, and profit-sharing disagreements.',
        'Director & Officer Liability Cases - Claims involving breach of fiduciary duty, negligence, or misconduct.',
        'Corporate Fraud & Misrepresentation - Litigation arising from fraudulent transactions, false disclosures, or deceptive business practices.',
        'Cross-Border Commercial Disputes - Handling international contract breaches and multi-jurisdictional enforcement.',
        'Trade & Supply Chain Litigation - Disputes involving suppliers, distributors, logistics firms, and international trade partners.'
      ]
    },
    { 
      id: 2,
      icon: ipIcon, 
      title: 'Intellectual Property & Technology Law', 
      description: 'Protection, commercialization, and enforcement of intangible assets and complex technology rights.',
      fullDescription: `Protection, commercialization, and enforcement of intangible assets and complex technology rights. This practice safeguards innovation and ensures legal compliance in digital ecosystems.`,
      subBranches: [
        'Trademark & Copyright Protection - Registration, monitoring, enforcement, and brand anti-counterfeiting actions.',
        'Patent & Innovation Licensing - Patent filing assistance, invention agreements, and licensing negotiations.',
        'Software & IT Contracts - SaaS agreements, API licensing, software development contracts, and technology procurement.',
        'Data Ownership & IP Transfer - Structuring ownership of digital assets, databases, algorithms, and source code.',
        'IP Litigation & Enforcement - Representation in infringement suits involving trademarks, content, and proprietary technologies.'
      ]
    },
    { 
      id: 3,
      icon: bankingIcon, 
      title: 'Banking, Finance & Securities Regulation', 
      description: 'Comprehensive advisory on financial transactions, compliance frameworks, and regulatory obligations.',
      fullDescription: `Comprehensive advisory on financial transactions, compliance frameworks, and regulatory obligations for institutions, investors, and corporate borrowers.`,
      subBranches: [
        'Loan Structuring & Syndicated Finance - Drafting and negotiating facility agreements, security documents, and debt restructuring.',
        'Securities Issuance & Corporate Finance - Compliance for IPOs, private placements, and investment instruments.',
        'Regulatory Compliance (AML/KYC) - Anti-money-laundering frameworks, risk reporting, and compliance audits.',
        'Financial Dispute Resolution - Representation in banking fraud cases, loan defaults, and regulatory investigations.',
        'Investment Advisory Regulations - Guidance for fund managers, brokers, and fintech investment platforms.'
      ]
    },
    { 
      id: 4,  // ADDED AS 4TH INITIAL CATEGORY
      icon: employmentIcon, 
      title: 'Employment & Labour Compliance', 
      description: 'Advisory for employers and employees on complex workplace regulations and risk mitigation.',
      fullDescription: `Advisory for employers and employees on complex workplace regulations, risk mitigation, and labour dispute resolution.`,
      subBranches: [
        'HR Policy Structuring & Review - Development of compliant employee handbooks, procedures, and workplace policies.',
        'Workplace Misconduct Investigations - Handling harassment, fraud, discrimination, and disciplinary cases.',
        'Labour Audits & Compliance Checks - Ensuring adherence to employment laws, wage standards, and safety requirements.',
        'Collective Bargaining & Union Negotiations - Advisory for employer-union relations and dispute prevention.',
        'Labour Dispute Resolution - Representation in arbitration boards, tribunals, and industrial courts.'
      ]
    }
  ];

  const additionalCategories = [
    { 
      id: 5,  // CHANGED FROM 4 TO 5
      icon: taxIcon, 
      title: 'Tax Advisory & Tax Dispute Resolution', 
      description: 'Comprehensive tax planning, compliance assistance, and representation before tax authorities.',
      fullDescription: `Comprehensive tax planning, compliance assistance, and representation before tax authorities to minimize risk and ensure regulatory alignment.`,
      subBranches: [
        'Corporate Tax Structuring - Designing tax-efficient corporate models and reorganizations.',
        'Cross-Border & International Tax Planning - Advisory on double taxation treaties and international tax exposure.',
        'VAT Planning & Advisory - Handling VAT registration, compliance, and transactional planning.',
        'Tax Audits & Investigations - Representation during audits, assessments, and tax authority inquiries.',
        'Tax Appeals & Tribunal Representation - Challenging disputed tax decisions before tribunals or courts.'
      ]
    },
    { 
      id: 6,  // CHANGED FROM 5 TO 6
      icon: energyIcon, 
      title: 'Energy, Mining & Natural Resources Law', 
      description: 'Legal support for high-value natural resource projects and sustainable operations.',
      fullDescription: `Legal support for high-value natural resource projects, ensuring compliance, community relations, and sustainable operations.`,
      subBranches: [
        'Licensing & Concessions - Assistance in obtaining exploration licenses, production agreements, and operational permits.',
        'Environmental & Social Impact Compliance (ESIA) - Ensuring projects meet environmental standards and community requirements.',
        'Mining Contracts & Joint Ventures - Negotiating extraction contracts, off-take agreements, and partnership structures.',
        'Land Access & Community Agreements - Structuring benefit-sharing agreements and dispute management.',
        'Energy Regulation & Compliance - Advisory on renewable energy, electricity licensing, and regulatory audits.'
      ]
    },
    { 
      id: 7,  // CHANGED FROM 6 TO 7
      icon: procurementIcon, 
      title: 'Public Procurement & Government Contracts', 
      description: 'Strategic legal support for businesses engaging with government entities.',
      fullDescription: `Strategic legal support for businesses engaging with government entities, from tendering to contract execution.`,
      subBranches: [
        'Tender Compliance Reviews - Ensuring bid submissions meet all legal and technical requirements.',
        'Bid Protest & Administrative Review - Representation in disputes involving tender irregularities or unfair awards.',
        'Government Contract Negotiation - Drafting and negotiating service agreements, supply contracts, and PPP arrangements.',
        'Regulatory Risk Assessments - Evaluating procurement risks for public-private engagements.',
        'Performance & Contract Dispute Resolution - Handling contract breaches, delays, or performance issues.'
      ]
    },
    { 
      id: 8,  // CHANGED FROM 7 TO 8
      icon: dataIcon, 
      title: 'Data Protection & Cybersecurity Compliance', 
      description: 'Support for organizations to operate securely and legally in digital environments.',
      fullDescription: `Support for organizations to operate securely and legally in digital environments, protecting customer information and preventing breaches.`,
      subBranches: [
        'Data Privacy Audits - Reviewing data handling processes for compliance with data protection laws.',
        'GDPR, DPA & Global Privacy Alignment - Ensuring multi-jurisdictional compliance for global operations.',
        'Cybersecurity Risk Mitigation - Policy drafting, breach response planning, and cybersecurity governance.',
        'Data Processing Agreements (DPAs) - Drafting contracts for data sharing, outsourcing, and cloud services.',
        'Incident Response Advisory - Managing breach notifications, investigations, and regulatory interactions.'
      ]
    },
    { 
      id: 9,  // CHANGED FROM 8 TO 9
      icon: arbitrationIcon, 
      title: 'Arbitration & Alternative Dispute Resolution', 
      description: 'Efficient, private, and cost-effective solutions for commercial conflicts.',
      fullDescription: `Efficient, private, and cost-effective solutions for commercial conflicts outside traditional court systems.`,
      subBranches: [
        'Commercial Arbitration - Local and international arbitration for contractual, corporate, and cross-border disputes.',
        'Mediation & Negotiation Strategy - Structured dialogue to achieve amicable settlements.',
        'Enforcement of Arbitral Awards - Domestic and foreign award recognition and enforcement.',
        'ADR Policy Drafting - Creating dispute-resolution clauses and frameworks for corporate agreements.',
        'Specialized Sector Arbitration - Arbitration in construction, energy, procurement, and commercial contracts.'
      ]
    },
    { 
      id: 10,  // CHANGED FROM 9 TO 10
      icon: environmentIcon, 
      title: 'Environmental & Land Use Regulation', 
      description: 'Legal guidance for sustainable development and environmental protection.',
      fullDescription: `Legal guidance for sustainable development, environmental protection, and land governance.`,
      subBranches: [
        'Environmental Compliance & Licensing - Advising on permits, emissions standards, and environmental management plans.',
        'Land Zoning & Development Approvals - Navigating local planning regulations and development authority requirements.',
        'ESG Advisory - Supporting businesses in compliance with global environmental, social, and governance benchmarks.',
        'Environmental Litigation - Representing clients in pollution, land degradation, and regulatory violation claims.',
        'Conservation & Natural Resources Management - Legal support for protected areas, wildlife conservation, and sustainable land use.'
      ]
    }
  ];
  const allCategories = [...initialCategories, ...additionalCategories];
  const displayedCategories = showAllCategories ? allCategories : initialCategories;

  const handleCategoryClick = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  const handleShowAllCategories = () => {
    setShowAllCategories(!showAllCategories);
    setExpandedCategory(null); // Collapse any expanded category when toggling
  };

  return (
    <section className="services" id="legal-areas">
      <div className="container">
        <div className="services-header">
          <span className="section-label">Legal practice areas</span>
          <h2 className="section-title">
            For nearly 7 years we help people to solve their legal problems in such areas as
          </h2>
        </div>
        
        <div className="services-grid">
          {displayedCategories.map((category) => (
            <div 
              key={category.id}
              className={`service-card ${expandedCategory === category.id ? 'expanded' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="service-header">
                <div className="service-icon">
                  <img src={category.icon} alt={category.title} className="gold-icon" />
                </div>
                <h3 className="service-title">{category.title}</h3>
                <div className="expand-icon">
                  {expandedCategory === category.id ? '−' : '+'}
                </div>
              </div>
              
              <p className="service-description">{category.description}</p>
              
              {expandedCategory === category.id && (
                <div className="service-details">
                  <p className="full-description">{category.fullDescription}</p>
                  
                  <div className="sub-branches">
                    <h4 className="sub-branches-title">Sub-branches:</h4>
                    <ul className="sub-branches-list">
                      {category.subBranches.map((branch, index) => (
                        <li key={index} className="sub-branch-item">
                          {branch}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <button className="dark-btn" onClick={handleShowAllCategories}>
            {showAllCategories ? 'Show Less Categories' : 'All Categories'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;