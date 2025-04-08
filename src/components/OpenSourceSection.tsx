
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Code, GitPullRequest } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Contribution = {
  project: string;
  contributions: {
    url: string;
    prNumber: string;
    title?: string; // Added title property
  }[];
  logo?: string;
};

export default function OpenSourceSection() {
  const [contributions, setContributions] = useState<Contribution[]>([
    {
      project: 'Elasticsearch',
      logo: '/logo/elasticsearch.svg',
      contributions: [
        { url: 'https://github.com/elastic/elasticsearch/pull/53533', prNumber: '53533', title: 'Assert that keystore has been created' },
        { url: 'https://github.com/elastic/elasticsearch/pull/55413', prNumber: '55413', title: 'Fixed flakey TransportClientIT test' },
        { url: 'https://github.com/elastic/elasticsearch/pull/67802', prNumber: '67802', title: 'Updated Netty to version 4.1.52.Final' },
      ],
    },
    {
      project: 'Tomcat',
      logo: '/logo/tomcat.png',
      contributions: [
        { url: 'https://github.com/apache/tomcat/pull/673', prNumber: '673', title: 'Upgraded to JUnit Jupiter 5.9.0' },
        { url: 'https://github.com/apache/tomcat/pull/805', prNumber: '805', title: 'Changed from using StringBuilder to StringBuffer' },
      ],
    },
    {
      project: 'Http4k',
      contributions: [
        { url: 'https://github.com/http4k/http4k/pull/545', prNumber: '545', title: 'Adds GitHub API support for GraphQL' },
        { url: 'https://github.com/http4k/http4k/pull/547', prNumber: '547', title: 'Added unit tests for GitHub GraphQL client' },
      ],
    },
    {
      project: 'Vert.x',
      contributions: [
        { url: 'https://github.com/eclipse-vertx/vert.x/pull/3719', prNumber: '3719', title: 'Fixes NullPointerException in Http2ServerImpl' },
      ],
    },
  ]);

  return (
    <section id="opensource" className="py-16 bg-developer-lightGray/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Open Source Contributions</h2>
        
        <p className="text-center text-lg text-developer-gray/90 mb-12 max-w-3xl mx-auto">
          I'm passionate about giving back to the developer community through open source contributions.
          Here are some of my recent pull requests to popular projects:
        </p>
        
        <div className="max-w-5xl mx-auto grid gap-6">
          {contributions.map((contribution, index) => (
            <Card key={index} className="animate-fade-up shadow-md border-developer-lightBlue/20" 
                  style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-3">
                  {contribution.logo ? (
                    <img 
                      src={contribution.logo} 
                      alt={`${contribution.project} logo`} 
                      className="h-6 w-6 object-contain" 
                    />
                  ) : (
                    <Code className="h-5 w-5 text-developer-blue" />
                  )}
                  <span>{contribution.project}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">PR</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead className="w-[120px]">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contribution.contributions.map((pr, prIndex) => (
                      <TableRow key={prIndex}>
                        <TableCell className="font-medium">#{pr.prNumber}</TableCell>
                        <TableCell>{pr.title || "Loading..."}</TableCell>
                        <TableCell>
                          <a 
                            href={pr.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-developer-blue hover:text-developer-darkBlue transition-colors"
                          >
                            <GitPullRequest className="h-4 w-4" />
                            <span className="underline underline-offset-2">View PR</span>
                          </a>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://github.com/hakantaskin" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-developer-blue hover:text-developer-darkBlue transition-colors font-medium"
          >
            <Github className="h-5 w-5" />
            <span>View more on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
