'use client';

import React, { use } from 'react';
import PromotionForm from '@/app/components/promotion-form';

export interface PageProps {
  // params: { id: string };
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const { id } = use(params);

  return (
    <div className="py-6 px-10">
      {/* <PromotionForm companyId={params.id} /> */}
      <PromotionForm companyId={id} />
    </div>
  );
}
