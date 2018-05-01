﻿// <auto-generated />
using Labb4MVC.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Labb4MVC.Migrations
{
    [DbContext(typeof(Labb4MVCContext))]
    partial class Labb4MVCContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.2-rtm-10011")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Labb4MVC.Models.HighScore", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("Score");

                    b.HasKey("Id");

                    b.ToTable("HighScore");
                });

            modelBuilder.Entity("Labb4MVC.Models.Quiz", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Alternativ");

                    b.Property<string>("Question");

                    b.Property<int?>("ScoreId");

                    b.HasKey("Id");

                    b.HasIndex("ScoreId");

                    b.ToTable("Quiz");
                });

            modelBuilder.Entity("Labb4MVC.Models.Quiz", b =>
                {
                    b.HasOne("Labb4MVC.Models.HighScore", "Score")
                        .WithMany()
                        .HasForeignKey("ScoreId");
                });
#pragma warning restore 612, 618
        }
    }
}
