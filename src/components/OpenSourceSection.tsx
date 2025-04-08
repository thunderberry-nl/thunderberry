
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Code, GitPullRequest } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

type Contribution = {
  project: string;
  showProjectNameInRows: boolean
  contributions: {
    url: string;
    prNumber: string;
    title?: string;
    projectName?: string;
  }[];
  logo?: string;
};

export default function OpenSourceSection() {
  const [contributions, setContributions] = useState<Contribution[]>([
    {
      project: 'Elasticsearch',
      logo: '/logo/elasticsearch.svg',
      showProjectNameInRows: false,
      contributions: [
        { url: 'https://github.com/elastic/elasticsearch/pull/53533', prNumber: '53533', title: 'Enable support for decompression of compressed response within RestHighLevelClient' },
        { url: 'https://github.com/elastic/elasticsearch/pull/55413', prNumber: '55413', title: 'Enable decompression of response within LowLevelRestClient' },
        { url: 'https://github.com/elastic/elasticsearch/pull/67802', prNumber: '67802', title: 'Added support for passing http query parameters' },
      ],
    },
    {
      project: 'Tomcat',
      logo: '/logo/tomcat.png',
      showProjectNameInRows: false,
      contributions: [
        { url: 'https://github.com/apache/tomcat/pull/673', prNumber: '673', title: 'Added option to use custom SSLContext' },
        { url: 'https://github.com/apache/tomcat/pull/805', prNumber: '805', title: 'Simplify usage of custom ssl configuration' },
      ],
    },
    {
      project: 'Http4k',
      showProjectNameInRows: false,
      contributions: [
        { url: 'https://github.com/http4k/http4k/pull/545', prNumber: '545', title: 'Bugfix: add nullsafety and fallback for description within the Status' },
        { url: 'https://github.com/http4k/http4k/pull/547', prNumber: '547', title: 'Start ApacheAsyncClient by default if not started yet' },
      ],
    },
    {
      project: 'HTTP Libraries',
      showProjectNameInRows: true,
      contributions: [
        { url: 'https://github.com/Kong/unirest-java/pull/381', prNumber: '381', title: 'Support for custom ciphers and protocols for https requests', projectName: 'Unirest-Java' },
        { url: 'https://github.com/Kong/unirest-java/pull/384', prNumber: '384', title: 'Removed redundant access modifiers, fixed typos and simplified some assertions', projectName: 'Unirest-Java' },
        { url: 'https://github.com/eclipse-vertx/vert.x/pull/3719', prNumber: '3719', title: 'Support for generic Key and Trust material', projectName: 'Vert.x' },
        { url: 'https://github.com/com-lihaoyi/requests-scala/pull/62', prNumber: '62', title: 'Support for custom SSLContext for ssl configuration', projectName: 'Requests-Scala' },
        { url: 'https://github.com/ktorio/ktor/pull/1852', prNumber: '1852', title: 'Bug-fix: enhanced handling of statusCode for AndroidEngine', projectName: 'Ktor' },
        { url: 'https://github.com/eclipse-ee4j/jersey/pull/4573', prNumber: '4573', title: 'Support for SSL Configuration within JerseyTest', projectName: 'Jersey' },
        { url: 'https://github.com/JetBrains/Exposed/pull/1852', prNumber: '1852', title: 'Fix: Verbose logging in test module', projectName: 'Exposed' },
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
                      {contribution.showProjectNameInRows ? <TableHead className="w-[150px]">Project</TableHead>: null }
                      <TableHead>Title</TableHead>
                      <TableHead className="w-[120px]">Link</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {contribution.contributions.map((pr, prIndex) => (
                      <TableRow key={prIndex}>
                        <TableCell className="font-medium">#{pr.prNumber}</TableCell>
                        {pr.projectName ? <TableCell>{pr.projectName}</TableCell>: null }
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
