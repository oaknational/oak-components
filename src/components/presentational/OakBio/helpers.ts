export function generateBioTitle({
  role,
  organisationName,
}: {
  role?: string;
  organisationName?: string;
}) {
  const title = [role, organisationName].filter(Boolean).join(" at ");
  return title;
}
