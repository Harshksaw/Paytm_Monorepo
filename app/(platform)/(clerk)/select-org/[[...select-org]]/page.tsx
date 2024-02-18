import { OrganizationList } from "@clerk/nextjs";


export default function SelectOrgPage() {
  return (
    <div>
      <OrganizationList 
      hidePersonal
      afterSelectOrganizationUrl="/orgainization/:id"
      afterCreateOrganizationUrl="/orgainization/:id"
      />
    </div>
  );
}