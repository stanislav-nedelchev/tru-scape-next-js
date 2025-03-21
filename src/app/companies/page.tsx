import React from 'react';
import CompanyRow from '../components/company-row';
import Header from '../components/header';
import Toolbar from '../components/toolbar';
import AddCompanyButton from '../components/add-company-button';
import SearchInput from '../components/search-input';
import CompanyTable from '../components/company-table';
import { Status } from '../components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category="Products"
            company="Costco"
            status={Status.Pending}
            promotion={true}
            country="USA"
            joinedDate="02.19.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
