import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@components/ui/breadcrumb"
import { Fragment } from 'react';


export function BreadcrumbSection({breadcrumbLinks}){
  return(
    <Breadcrumb className="container mx-auto px-4 py-4">
      <BreadcrumbList>
        {breadcrumbLinks.map((breadcrumbLink, i) => (
          <Fragment key={i}>
            <BreadcrumbItem>
              {breadcrumbLink.link ? (
                <BreadcrumbLink href={breadcrumbLink.link}>
                  {breadcrumbLink.title}
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{breadcrumbLink.title}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {i < breadcrumbLinks.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}