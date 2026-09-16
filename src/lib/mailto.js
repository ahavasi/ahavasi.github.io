import resumeData from "../resumeData";

const { social, enquiry } = resumeData;

// A bare mailto: drops the visitor into an empty compose window, which is where
// most enquiries die. Naming the service in the subject carries the intent from
// wherever it formed.
export const mailtoFor = (service) => {
  const subject = service ? `${enquiry.subject}: ${service}` : enquiry.subject;
  return `mailto:${social.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(enquiry.body)}`;
};

export const emailAddress = social.email;
